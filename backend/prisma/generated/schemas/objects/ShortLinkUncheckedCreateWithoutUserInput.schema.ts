import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  originalLink: z.string(),
  shortLink: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ShortLinkUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ShortLinkUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkUncheckedCreateWithoutUserInput>;
export const ShortLinkUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
