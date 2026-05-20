import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  originalLink: SortOrderSchema.optional(),
  shortLink: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ShortLinkOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ShortLinkOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkOrderByWithRelationInput>;
export const ShortLinkOrderByWithRelationInputObjectZodSchema = makeSchema();
