import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ShortLinkSelectObjectSchema as ShortLinkSelectObjectSchema } from './objects/ShortLinkSelect.schema';
import { ShortLinkIncludeObjectSchema as ShortLinkIncludeObjectSchema } from './objects/ShortLinkInclude.schema';
import { ShortLinkUpdateInputObjectSchema as ShortLinkUpdateInputObjectSchema } from './objects/ShortLinkUpdateInput.schema';
import { ShortLinkUncheckedUpdateInputObjectSchema as ShortLinkUncheckedUpdateInputObjectSchema } from './objects/ShortLinkUncheckedUpdateInput.schema';
import { ShortLinkWhereUniqueInputObjectSchema as ShortLinkWhereUniqueInputObjectSchema } from './objects/ShortLinkWhereUniqueInput.schema';

export const ShortLinkUpdateOneSchema: z.ZodType<Prisma.ShortLinkUpdateArgs> = z.object({ select: ShortLinkSelectObjectSchema.optional(), include: ShortLinkIncludeObjectSchema.optional(), data: z.union([ShortLinkUpdateInputObjectSchema, ShortLinkUncheckedUpdateInputObjectSchema]), where: ShortLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ShortLinkUpdateArgs>;

export const ShortLinkUpdateOneZodSchema = z.object({ select: ShortLinkSelectObjectSchema.optional(), include: ShortLinkIncludeObjectSchema.optional(), data: z.union([ShortLinkUpdateInputObjectSchema, ShortLinkUncheckedUpdateInputObjectSchema]), where: ShortLinkWhereUniqueInputObjectSchema }).strict();