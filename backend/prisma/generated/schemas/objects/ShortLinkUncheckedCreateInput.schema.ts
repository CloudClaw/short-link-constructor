import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  originalLink: z.string(),
  shortLink: z.string(),
  userId: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ShortLinkUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ShortLinkUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkUncheckedCreateInput>;
export const ShortLinkUncheckedCreateInputObjectZodSchema = makeSchema();
