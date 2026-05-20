import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  originalLink: SortOrderSchema.optional(),
  shortLink: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ShortLinkOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ShortLinkOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkOrderByWithRelationInput>;
export const ShortLinkOrderByWithRelationInputObjectZodSchema = makeSchema();
