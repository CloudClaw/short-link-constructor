import * as z from 'zod';
// prettier-ignore
export const ShortLinkModelSchema = z.object({
    id: z.number().int(),
    originalLink: z.string(),
    shortLink: z.string(),
    userId: z.number().int(),
    user: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ShortLinkPureType = z.infer<typeof ShortLinkModelSchema>;
