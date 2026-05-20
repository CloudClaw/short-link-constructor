import * as z from 'zod';
export const UserDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  email: z.string(),
  password: z.string(),
  shortLinks: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));