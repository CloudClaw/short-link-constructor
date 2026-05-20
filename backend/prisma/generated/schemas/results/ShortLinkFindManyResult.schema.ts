import * as z from 'zod';
export const ShortLinkFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  originalLink: z.string(),
  shortLink: z.string(),
  userId: z.number().int(),
  user: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});