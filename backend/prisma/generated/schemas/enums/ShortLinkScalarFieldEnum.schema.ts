import * as z from 'zod';

export const ShortLinkScalarFieldEnumSchema = z.enum(['id', 'originalLink', 'shortLink', 'userId', 'createdAt', 'updatedAt'])

export type ShortLinkScalarFieldEnum = z.infer<typeof ShortLinkScalarFieldEnumSchema>;