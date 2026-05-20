import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ShortLinkIncludeObjectSchema as ShortLinkIncludeObjectSchema } from './objects/ShortLinkInclude.schema';
import { ShortLinkOrderByWithRelationInputObjectSchema as ShortLinkOrderByWithRelationInputObjectSchema } from './objects/ShortLinkOrderByWithRelationInput.schema';
import { ShortLinkWhereInputObjectSchema as ShortLinkWhereInputObjectSchema } from './objects/ShortLinkWhereInput.schema';
import { ShortLinkWhereUniqueInputObjectSchema as ShortLinkWhereUniqueInputObjectSchema } from './objects/ShortLinkWhereUniqueInput.schema';
import { ShortLinkScalarFieldEnumSchema } from './enums/ShortLinkScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ShortLinkFindManySelectSchema: z.ZodType<Prisma.ShortLinkSelect> = z.object({
    id: z.boolean().optional(),
    originalLink: z.boolean().optional(),
    shortLink: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ShortLinkSelect>;

export const ShortLinkFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    originalLink: z.boolean().optional(),
    shortLink: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const ShortLinkFindManySchema: z.ZodType<Prisma.ShortLinkFindManyArgs> = z.object({ select: ShortLinkFindManySelectSchema.optional(), include: z.lazy(() => ShortLinkIncludeObjectSchema.optional()), orderBy: z.union([ShortLinkOrderByWithRelationInputObjectSchema, ShortLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: ShortLinkWhereInputObjectSchema.optional(), cursor: ShortLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ShortLinkScalarFieldEnumSchema, ShortLinkScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ShortLinkFindManyArgs>;

export const ShortLinkFindManyZodSchema = z.object({ select: ShortLinkFindManySelectSchema.optional(), include: z.lazy(() => ShortLinkIncludeObjectSchema.optional()), orderBy: z.union([ShortLinkOrderByWithRelationInputObjectSchema, ShortLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: ShortLinkWhereInputObjectSchema.optional(), cursor: ShortLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ShortLinkScalarFieldEnumSchema, ShortLinkScalarFieldEnumSchema.array()]).optional() }).strict();