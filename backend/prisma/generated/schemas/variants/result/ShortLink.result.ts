import * as z from 'zod';
// prettier-ignore
export const ShortLinkResultSchema = z.object({
    id: z.number().int(),
    originalLink: z.string(),
    shortLink: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ShortLinkResultType = z.infer<typeof ShortLinkResultSchema>;
