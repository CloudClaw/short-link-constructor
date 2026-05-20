import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ShortLinkCreateManyInputObjectSchema as ShortLinkCreateManyInputObjectSchema } from './objects/ShortLinkCreateManyInput.schema';

export const ShortLinkCreateManySchema: z.ZodType<Prisma.ShortLinkCreateManyArgs> = z.object({ data: z.union([ ShortLinkCreateManyInputObjectSchema, z.array(ShortLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ShortLinkCreateManyArgs>;

export const ShortLinkCreateManyZodSchema = z.object({ data: z.union([ ShortLinkCreateManyInputObjectSchema, z.array(ShortLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();