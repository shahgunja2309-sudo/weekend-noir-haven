import { useState, type FormEvent } from 'react';
import { useServerFn } from '@tanstack/react-start';
import { ArrowUpRight, Check, Loader2, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { eras, fanSchema, newsletterSchema } from '@/lib/submission-schemas';
import { joinList, shareStory } from '@/lib/submissions.functions';

export function SubmissionForm({ fan = false }: { fan?: boolean }) {
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [file, setFile] = useState<File>();
  const join = useServerFn(joinList);
  const share = useServerFn(shareStory);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError('');
    const form = new FormData(event.currentTarget);
    const input = { name: form.get('name'), email: form.get('email'), favorite_era: form.get('favorite_era'), message: form.get('message') };
    const parsed = (fan ? fanSchema : newsletterSchema).safeParse(input);
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? 'Please check your details.'); return; }
    setBusy(true);
    try {
      if (fan) {
        let image: { data: string; type: 'image/jpeg' | 'image/png' | 'image/webp' } | undefined;
        if (file) {
          if (file.size > 5 * 1024 * 1024 || !['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) throw new Error('Choose a JPG, PNG or WebP under 5 MB.');
          const encoded = await new Promise<string>((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result).split(',')[1] ?? ''); reader.onerror = reject; reader.readAsDataURL(file); });
          image = { data: encoded, type: file.type as 'image/jpeg' | 'image/png' | 'image/webp' };
        }
        await share({ data: fanSchema.parse({ ...input, image }) });
      } else await join({ data: newsletterSchema.parse(input) });
      setSuccess(true);
    } catch (e) { setError(e instanceof Error ? e.message : 'Something went wrong. Please try again.'); }
    finally { setBusy(false); }
  }
  if (success) return <div className="py-10 text-center" role="status"><Check className="mx-auto mb-5 size-9 text-primary"/><h3 className="font-display text-3xl">{fan ? 'Your story is part of the night.' : 'You’re on the list.'}</h3><p className="mt-4 text-muted-foreground">{fan ? 'Thank you. Your story has been received for review.' : 'Thank you for joining the After Hours list.'}</p></div>;
  return <form onSubmit={submit} className="space-y-5">
    <label className="form-label">NAME<Input required name="name" autoComplete="name" maxLength={100} placeholder="Your name" className="mt-2 h-12 rounded-sm"/></label>
    <label className="form-label">EMAIL<Input required name="email" type="email" autoComplete="email" maxLength={255} placeholder="Your email address" className="mt-2 h-12 rounded-sm"/></label>
    {fan && <><label className="form-label">FAVORITE ERA<select name="favorite_era" className="mt-2 h-12 w-full rounded-sm border border-input bg-background px-3 text-foreground">{eras.map(era => <option key={era}>{era}</option>)}</select></label><label className="form-label">YOUR STORY<Textarea required name="message" maxLength={2000} placeholder="The music. The moment. What it means to you." className="mt-2 min-h-32 rounded-sm"/></label><label className="form-label flex cursor-pointer items-center gap-3 border border-dashed border-input p-4"><Upload className="size-4"/>{file ? file.name : 'ADD A PHOTO · OPTIONAL'}<input type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" onChange={e => setFile(e.target.files?.[0])}/></label><p className="text-xs text-muted-foreground">JPG, PNG or WebP · Up to 5 MB. Submissions are reviewed before publication.</p></>}
    {!fan && <p className="text-xs leading-relaxed text-muted-foreground">By joining, you consent to your name and email being saved for future fan updates.</p>}
    {error && <p role="alert" className="text-sm text-primary">{error}</p>}
    <Button disabled={busy} type="submit" className="cinema-button w-full">{busy ? <Loader2 className="animate-spin"/> : <>{fan ? 'SHARE YOUR STORY' : 'JOIN THE AFTER HOURS LIST'}<ArrowUpRight/></>}</Button>
  </form>;
}