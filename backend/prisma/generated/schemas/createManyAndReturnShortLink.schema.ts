import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ShortLinkSelectObjectSchema as ShortLinkSelectObjectSchema } from './objects/ShortLinkSelect.schema';
import { ShortLinkCreateManyInputObjectSchema as ShortLinkCreateManyInputObjectSchema } from './objects/ShortLinkCreateManyInput.schema';

export const ShortLinkCreateManyAndReturnSchema: z.ZodType<Prisma.ShortLinkCreateManyAndReturnArgs> = z.object({ select: ShortLinkSelectObjectSchema.optional(), data: z.union([ ShortLinkCreateManyInputObjectSchema, z.array(ShortLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ShortLinkCreateManyAndReturnArgs>;

export const ShortLinkCreateManyAndReturnZodSchema = z.object({ select: ShortLinkSelectObjectSchema.optional(), data: z.union([ ShortLinkCreateManyInputObjectSchema, z.array(ShortLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();