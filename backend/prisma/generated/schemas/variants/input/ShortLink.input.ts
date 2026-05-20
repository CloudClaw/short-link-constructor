import * as z from 'zod';
// prettier-ignore
export const ShortLinkInputSchema = z.object({
    id: z.number().int(),
    originalLink: z.string(),
    shortLink: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ShortLinkInputType = z.infer<typeof ShortLinkInputSchema>;
