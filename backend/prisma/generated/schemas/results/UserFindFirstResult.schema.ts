import * as z from 'zod';
export const UserFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  email: z.string(),
  password: z.string(),
  shortLinks: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));