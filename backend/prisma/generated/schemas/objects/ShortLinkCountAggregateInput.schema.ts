import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  originalLink: z.literal(true).optional(),
  shortLink: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ShortLinkCountAggregateInputObjectSchema: z.ZodType<Prisma.ShortLinkCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkCountAggregateInputType>;
export const ShortLinkCountAggregateInputObjectZodSchema = makeSchema();
