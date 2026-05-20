import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ShortLinkUpdateManyMutationInputObjectSchema as ShortLinkUpdateManyMutationInputObjectSchema } from './objects/ShortLinkUpdateManyMutationInput.schema';
import { ShortLinkWhereInputObjectSchema as ShortLinkWhereInputObjectSchema } from './objects/ShortLinkWhereInput.schema';

export const ShortLinkUpdateManySchema: z.ZodType<Prisma.ShortLinkUpdateManyArgs> = z.object({ data: ShortLinkUpdateManyMutationInputObjectSchema, where: ShortLinkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ShortLinkUpdateManyArgs>;

export const ShortLinkUpdateManyZodSchema = z.object({ data: ShortLinkUpdateManyMutationInputObjectSchema, where: ShortLinkWhereInputObjectSchema.optional() }).strict();