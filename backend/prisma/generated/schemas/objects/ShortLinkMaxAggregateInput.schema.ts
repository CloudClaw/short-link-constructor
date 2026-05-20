import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  originalLink: z.literal(true).optional(),
  shortLink: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ShortLinkMaxAggregateInputObjectSchema: z.ZodType<Prisma.ShortLinkMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkMaxAggregateInputType>;
export const ShortLinkMaxAggregateInputObjectZodSchema = makeSchema();
