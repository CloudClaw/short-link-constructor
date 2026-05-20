import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ShortLinkSelectObjectSchema as ShortLinkSelectObjectSchema } from './objects/ShortLinkSelect.schema';
import { ShortLinkUpdateManyMutationInputObjectSchema as ShortLinkUpdateManyMutationInputObjectSchema } from './objects/ShortLinkUpdateManyMutationInput.schema';
import { ShortLinkWhereInputObjectSchema as ShortLinkWhereInputObjectSchema } from './objects/ShortLinkWhereInput.schema';

export const ShortLinkUpdateManyAndReturnSchema: z.ZodType<Prisma.ShortLinkUpdateManyAndReturnArgs> = z.object({ select: ShortLinkSelectObjectSchema.optional(), data: ShortLinkUpdateManyMutationInputObjectSchema, where: ShortLinkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ShortLinkUpdateManyAndReturnArgs>;

export const ShortLinkUpdateManyAndReturnZodSchema = z.object({ select: ShortLinkSelectObjectSchema.optional(), data: ShortLinkUpdateManyMutationInputObjectSchema, where: ShortLinkWhereInputObjectSchema.optional() }).strict();