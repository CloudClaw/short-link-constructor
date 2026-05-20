import * as z from 'zod';

export const UserSchema = z.object({
  id: z.number().int(),
  email: z.email(),
  password: z.string().min(6),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type UserType = z.infer<typeof UserSchema>;
