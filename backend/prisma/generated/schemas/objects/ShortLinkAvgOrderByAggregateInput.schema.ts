import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const ShortLinkAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ShortLinkAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkAvgOrderByAggregateInput>;
export const ShortLinkAvgOrderByAggregateInputObjectZodSchema = makeSchema();
