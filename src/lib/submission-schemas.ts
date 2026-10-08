import { z } from 'zod';

export const eras = ['Trilogy', 'Kiss Land', 'Beauty Behind the Madness', 'Starboy', 'After Hours', 'Dawn FM', 'Hurry Up Tomorrow'] as const;
export const newsletterSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.').max(100),
  email: z.string().trim().email('Please enter a valid email.').max(255).transform(v => v.toLowerCase()),
});
export const fanSchema = newsletterSchema.extend({
  favorite_era: z.enum(eras),
  message: z.string().trim().min(1, 'Please share your story.').max(2000),
  image: z.object({ data: z.string().max(7000000), type: z.enum(['image/jpeg', 'image/png', 'image/webp']) }).optional(),
});