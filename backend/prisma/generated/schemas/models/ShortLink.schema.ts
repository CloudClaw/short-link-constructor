import * as z from 'zod';

export const ShortLinkSchema = z.object({
  id: z.number().int(),
  originalLink: z.string(),
  shortLink: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ShortLinkType = z.infer<typeof ShortLinkSchema>;
