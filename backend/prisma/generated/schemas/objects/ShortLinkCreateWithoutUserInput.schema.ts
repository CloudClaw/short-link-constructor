import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  originalLink: z.string(),
  shortLink: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ShortLinkCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ShortLinkCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkCreateWithoutUserInput>;
export const ShortLinkCreateWithoutUserInputObjectZodSchema = makeSchema();
