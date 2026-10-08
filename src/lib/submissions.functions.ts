import { createServerFn } from '@tanstack/react-start';
import { fanSchema, newsletterSchema } from './submission-schemas';

export const joinList = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => newsletterSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { error } = await supabaseAdmin.from('newsletter_subscribers').upsert(data, { onConflict: 'email', ignoreDuplicates: true });
    if (error) throw new Error('We couldn’t save your signup. Please try again.');
    return { success: true };
  });

export const shareStory = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => fanSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    let image_path: string | null = null;
    if (data.image) {
      const bytes = Uint8Array.from(atob(data.image.data), c => c.charCodeAt(0));
      if (bytes.length > 5 * 1024 * 1024) throw new Error('Please choose an image under 5 MB.');
      const isJpeg = bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
      const isPng = bytes[0] === 137 && bytes[1] === 80 && bytes[2] === 78 && bytes[3] === 71;
      const isWebp = new TextDecoder().decode(bytes.slice(0, 4)) === 'RIFF' && new TextDecoder().decode(bytes.slice(8, 12)) === 'WEBP';
      if (!(data.image.type === 'image/jpeg' && isJpeg || data.image.type === 'image/png' && isPng || data.image.type === 'image/webp' && isWebp)) throw new Error('Please choose a valid JPG, PNG or WebP image.');
      image_path = `${crypto.randomUUID()}.${data.image.type.split('/')[1]}`;
      const { error } = await supabaseAdmin.storage.from('fan-submissions').upload(image_path, bytes, { contentType: data.image.type });
      if (error) throw new Error('Your image couldn’t be uploaded. Please try again.');
    }
    const { error } = await supabaseAdmin.from('fan_submissions').insert({ name: data.name, email: data.email, favorite_era: data.favorite_era, message: data.message, image_path });
    if (error) {
      if (image_path) await supabaseAdmin.storage.from('fan-submissions').remove([image_path]);
      throw new Error('We couldn’t save your story. Please try again.');
    }
    return { success: true };
  });