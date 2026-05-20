import * as z from 'zod';
export const ShortLinkCreateResultSchema = z.object({
  id: z.number().int(),
  originalLink: z.string(),
  shortLink: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});