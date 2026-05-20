import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  originalLink: z.boolean().optional(),
  shortLink: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const ShortLinkSelectObjectSchema: z.ZodType<Prisma.ShortLinkSelect> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkSelect>;
export const ShortLinkSelectObjectZodSchema = makeSchema();
