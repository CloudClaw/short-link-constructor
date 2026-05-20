import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ShortLinkCountOrderByAggregateInputObjectSchema as ShortLinkCountOrderByAggregateInputObjectSchema } from './ShortLinkCountOrderByAggregateInput.schema';
import { ShortLinkAvgOrderByAggregateInputObjectSchema as ShortLinkAvgOrderByAggregateInputObjectSchema } from './ShortLinkAvgOrderByAggregateInput.schema';
import { ShortLinkMaxOrderByAggregateInputObjectSchema as ShortLinkMaxOrderByAggregateInputObjectSchema } from './ShortLinkMaxOrderByAggregateInput.schema';
import { ShortLinkMinOrderByAggregateInputObjectSchema as ShortLinkMinOrderByAggregateInputObjectSchema } from './ShortLinkMinOrderByAggregateInput.schema';
import { ShortLinkSumOrderByAggregateInputObjectSchema as ShortLinkSumOrderByAggregateInputObjectSchema } from './ShortLinkSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  originalLink: SortOrderSchema.optional(),
  shortLink: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ShortLinkCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ShortLinkAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ShortLinkMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ShortLinkMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ShortLinkSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ShortLinkOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ShortLinkOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkOrderByWithAggregationInput>;
export const ShortLinkOrderByWithAggregationInputObjectZodSchema = makeSchema();
