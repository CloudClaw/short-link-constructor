import * as z from 'zod';

export const ShortLinkScalarFieldEnumSchema = z.enum(['id', 'originalLink', 'shortLink', 'createdAt', 'updatedAt'])

export type ShortLinkScalarFieldEnum = z.infer<typeof ShortLinkScalarFieldEnumSchema>;