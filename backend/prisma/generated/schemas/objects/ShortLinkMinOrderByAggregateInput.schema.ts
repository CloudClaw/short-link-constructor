import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  originalLink: SortOrderSchema.optional(),
  shortLink: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ShortLinkMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ShortLinkMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkMinOrderByAggregateInput>;
export const ShortLinkMinOrderByAggregateInputObjectZodSchema = makeSchema();
