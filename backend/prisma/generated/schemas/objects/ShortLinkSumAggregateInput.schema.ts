import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const ShortLinkSumAggregateInputObjectSchema: z.ZodType<Prisma.ShortLinkSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkSumAggregateInputType>;
export const ShortLinkSumAggregateInputObjectZodSchema = makeSchema();
