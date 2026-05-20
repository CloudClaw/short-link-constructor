import * as z from 'zod';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.number().int(),
    email: z.email(),
    password: z.string().min(6),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
