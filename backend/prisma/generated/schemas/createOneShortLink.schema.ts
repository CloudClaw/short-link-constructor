import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ShortLinkSelectObjectSchema as ShortLinkSelectObjectSchema } from './objects/ShortLinkSelect.schema';
import { ShortLinkCreateInputObjectSchema as ShortLinkCreateInputObjectSchema } from './objects/ShortLinkCreateInput.schema';
import { ShortLinkUncheckedCreateInputObjectSchema as ShortLinkUncheckedCreateInputObjectSchema } from './objects/ShortLinkUncheckedCreateInput.schema';

export const ShortLinkCreateOneSchema: z.ZodType<Prisma.ShortLinkCreateArgs> = z.object({ select: ShortLinkSelectObjectSchema.optional(),  data: z.union([ShortLinkCreateInputObjectSchema, ShortLinkUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ShortLinkCreateArgs>;

export const ShortLinkCreateOneZodSchema = z.object({ select: ShortLinkSelectObjectSchema.optional(),  data: z.union([ShortLinkCreateInputObjectSchema, ShortLinkUncheckedCreateInputObjectSchema]) }).strict();