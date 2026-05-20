import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  originalLink: z.string(),
  shortLink: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ShortLinkCreateInputObjectSchema: z.ZodType<Prisma.ShortLinkCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkCreateInput>;
export const ShortLinkCreateInputObjectZodSchema = makeSchema();
