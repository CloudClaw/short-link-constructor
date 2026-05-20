import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ShortLinkWhereInputObjectSchema as ShortLinkWhereInputObjectSchema } from './objects/ShortLinkWhereInput.schema';

export const ShortLinkDeleteManySchema: z.ZodType<Prisma.ShortLinkDeleteManyArgs> = z.object({ where: ShortLinkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ShortLinkDeleteManyArgs>;

export const ShortLinkDeleteManyZodSchema = z.object({ where: ShortLinkWhereInputObjectSchema.optional() }).strict();