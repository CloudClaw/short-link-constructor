import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ShortLinkSelectObjectSchema as ShortLinkSelectObjectSchema } from './objects/ShortLinkSelect.schema';
import { ShortLinkWhereUniqueInputObjectSchema as ShortLinkWhereUniqueInputObjectSchema } from './objects/ShortLinkWhereUniqueInput.schema';

export const ShortLinkFindUniqueOrThrowSchema: z.ZodType<Prisma.ShortLinkFindUniqueOrThrowArgs> = z.object({ select: ShortLinkSelectObjectSchema.optional(),  where: ShortLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ShortLinkFindUniqueOrThrowArgs>;

export const ShortLinkFindUniqueOrThrowZodSchema = z.object({ select: ShortLinkSelectObjectSchema.optional(),  where: ShortLinkWhereUniqueInputObjectSchema }).strict();