import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ShortLinkOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ShortLinkOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkOrderByRelationAggregateInput>;
export const ShortLinkOrderByRelationAggregateInputObjectZodSchema = makeSchema();
