import * as z from 'zod';
export const ShortLinkFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  originalLink: z.string(),
  shortLink: z.string(),
  userId: z.number().int(),
  user: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));