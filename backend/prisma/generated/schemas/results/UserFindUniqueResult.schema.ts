import * as z from 'zod';
export const UserFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  email: z.string(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
}));