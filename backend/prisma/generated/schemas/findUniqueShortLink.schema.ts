import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ShortLinkSelectObjectSchema as ShortLinkSelectObjectSchema } from './objects/ShortLinkSelect.schema';
import { ShortLinkIncludeObjectSchema as ShortLinkIncludeObjectSchema } from './objects/ShortLinkInclude.schema';
import { ShortLinkWhereUniqueInputObjectSchema as ShortLinkWhereUniqueInputObjectSchema } from './objects/ShortLinkWhereUniqueInput.schema';

export const ShortLinkFindUniqueSchema: z.ZodType<Prisma.ShortLinkFindUniqueArgs> = z.object({ select: ShortLinkSelectObjectSchema.optional(), include: ShortLinkIncludeObjectSchema.optional(), where: ShortLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ShortLinkFindUniqueArgs>;

export const ShortLinkFindUniqueZodSchema = z.object({ select: ShortLinkSelectObjectSchema.optional(), include: ShortLinkIncludeObjectSchema.optional(), where: ShortLinkWhereUniqueInputObjectSchema }).strict();