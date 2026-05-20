import * as z from 'zod';
// prettier-ignore
export const UserModelSchema = z.object({
    id: z.number().int(),
    email: z.email(),
    password: z.string().min(6),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserPureType = z.infer<typeof UserModelSchema>;
