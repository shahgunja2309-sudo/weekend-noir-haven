import { describe, expect, it } from 'vitest';
import { fanSchema, newsletterSchema, eras } from './submission-schemas';
describe('Submissions', () => {
  it('requires a name and valid email for joining the list', () => {
    expect(newsletterSchema.safeParse({ name: '', email: 'invalid' }).success).toBe(false);
    expect(newsletterSchema.parse({ name: ' XO ', email: 'FAN@example.com' })).toEqual({ name: 'XO', email: 'fan@example.com' });
  });
  it('requires a message and a supported favorite era for fan stories', () => {
    for (const favorite_era of eras) expect(fanSchema.safeParse({ name: 'Fan', email: 'fan@example.com', favorite_era, message: 'My favorite show.' }).success).toBe(true);
    expect(fanSchema.safeParse({ name: 'Fan', email: 'fan@example.com', favorite_era: 'Unknown', message: '' }).success).toBe(false);
  });
  it('allows optional images and rejects unsupported image types', () => {
    const story = { name: 'Fan', email: 'fan@example.com', favorite_era: 'After Hours', message: 'A night to remember.' };
    expect(fanSchema.safeParse(story).success).toBe(true);
    expect(fanSchema.safeParse({ ...story, image: { type: 'image/svg+xml', data: 'abc' } }).success).toBe(false);
  });
});