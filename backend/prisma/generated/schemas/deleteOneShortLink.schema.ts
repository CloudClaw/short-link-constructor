import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ShortLinkSelectObjectSchema as ShortLinkSelectObjectSchema } from './objects/ShortLinkSelect.schema';
import { ShortLinkIncludeObjectSchema as ShortLinkIncludeObjectSchema } from './objects/ShortLinkInclude.schema';
import { ShortLinkWhereUniqueInputObjectSchema as ShortLinkWhereUniqueInputObjectSchema } from './objects/ShortLinkWhereUniqueInput.schema';

export const ShortLinkDeleteOneSchema: z.ZodType<Prisma.ShortLinkDeleteArgs> = z.object({ select: ShortLinkSelectObjectSchema.optional(), include: ShortLinkIncludeObjectSchema.optional(), where: ShortLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ShortLinkDeleteArgs>;

export const ShortLinkDeleteOneZodSchema = z.object({ select: ShortLinkSelectObjectSchema.optional(), include: ShortLinkIncludeObjectSchema.optional(), where: ShortLinkWhereUniqueInputObjectSchema }).strict();