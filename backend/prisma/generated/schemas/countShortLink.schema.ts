import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ShortLinkOrderByWithRelationInputObjectSchema as ShortLinkOrderByWithRelationInputObjectSchema } from './objects/ShortLinkOrderByWithRelationInput.schema';
import { ShortLinkWhereInputObjectSchema as ShortLinkWhereInputObjectSchema } from './objects/ShortLinkWhereInput.schema';
import { ShortLinkWhereUniqueInputObjectSchema as ShortLinkWhereUniqueInputObjectSchema } from './objects/ShortLinkWhereUniqueInput.schema';
import { ShortLinkCountAggregateInputObjectSchema as ShortLinkCountAggregateInputObjectSchema } from './objects/ShortLinkCountAggregateInput.schema';

export const ShortLinkCountSchema: z.ZodType<Prisma.ShortLinkCountArgs> = z.object({ orderBy: z.union([ShortLinkOrderByWithRelationInputObjectSchema, ShortLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: ShortLinkWhereInputObjectSchema.optional(), cursor: ShortLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ShortLinkCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ShortLinkCountArgs>;

export const ShortLinkCountZodSchema = z.object({ orderBy: z.union([ShortLinkOrderByWithRelationInputObjectSchema, ShortLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: ShortLinkWhereInputObjectSchema.optional(), cursor: ShortLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ShortLinkCountAggregateInputObjectSchema ]).optional() }).strict();