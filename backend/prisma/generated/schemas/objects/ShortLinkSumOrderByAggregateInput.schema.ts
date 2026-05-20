import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const ShortLinkSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ShortLinkSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkSumOrderByAggregateInput>;
export const ShortLinkSumOrderByAggregateInputObjectZodSchema = makeSchema();
