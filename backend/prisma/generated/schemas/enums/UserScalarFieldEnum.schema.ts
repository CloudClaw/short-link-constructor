import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'email', 'password', 'createdAt', 'updatedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;