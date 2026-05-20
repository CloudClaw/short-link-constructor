import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const ShortLinkAvgAggregateInputObjectSchema: z.ZodType<Prisma.ShortLinkAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkAvgAggregateInputType>;
export const ShortLinkAvgAggregateInputObjectZodSchema = makeSchema();
