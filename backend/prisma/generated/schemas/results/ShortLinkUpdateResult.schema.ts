import * as z from 'zod';
export const ShortLinkUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  originalLink: z.string(),
  shortLink: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
}));