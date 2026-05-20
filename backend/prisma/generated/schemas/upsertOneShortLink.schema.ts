import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ShortLinkSelectObjectSchema as ShortLinkSelectObjectSchema } from './objects/ShortLinkSelect.schema';
import { ShortLinkIncludeObjectSchema as ShortLinkIncludeObjectSchema } from './objects/ShortLinkInclude.schema';
import { ShortLinkWhereUniqueInputObjectSchema as ShortLinkWhereUniqueInputObjectSchema } from './objects/ShortLinkWhereUniqueInput.schema';
import { ShortLinkCreateInputObjectSchema as ShortLinkCreateInputObjectSchema } from './objects/ShortLinkCreateInput.schema';
import { ShortLinkUncheckedCreateInputObjectSchema as ShortLinkUncheckedCreateInputObjectSchema } from './objects/ShortLinkUncheckedCreateInput.schema';
import { ShortLinkUpdateInputObjectSchema as ShortLinkUpdateInputObjectSchema } from './objects/ShortLinkUpdateInput.schema';
import { ShortLinkUncheckedUpdateInputObjectSchema as ShortLinkUncheckedUpdateInputObjectSchema } from './objects/ShortLinkUncheckedUpdateInput.schema';

export const ShortLinkUpsertOneSchema: z.ZodType<Prisma.ShortLinkUpsertArgs> = z.object({ select: ShortLinkSelectObjectSchema.optional(), include: ShortLinkIncludeObjectSchema.optional(), where: ShortLinkWhereUniqueInputObjectSchema, create: z.union([ ShortLinkCreateInputObjectSchema, ShortLinkUncheckedCreateInputObjectSchema ]), update: z.union([ ShortLinkUpdateInputObjectSchema, ShortLinkUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ShortLinkUpsertArgs>;

export const ShortLinkUpsertOneZodSchema = z.object({ select: ShortLinkSelectObjectSchema.optional(), include: ShortLinkIncludeObjectSchema.optional(), where: ShortLinkWhereUniqueInputObjectSchema, create: z.union([ ShortLinkCreateInputObjectSchema, ShortLinkUncheckedCreateInputObjectSchema ]), update: z.union([ ShortLinkUpdateInputObjectSchema, ShortLinkUncheckedUpdateInputObjectSchema ]) }).strict();