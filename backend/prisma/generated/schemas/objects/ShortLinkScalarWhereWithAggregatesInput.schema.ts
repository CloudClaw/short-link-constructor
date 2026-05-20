import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const shortlinkscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ShortLinkScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ShortLinkScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ShortLinkScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ShortLinkScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ShortLinkScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  originalLink: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  shortLink: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ShortLinkScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ShortLinkScalarWhereWithAggregatesInput> = shortlinkscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ShortLinkScalarWhereWithAggregatesInput>;
export const ShortLinkScalarWhereWithAggregatesInputObjectZodSchema = shortlinkscalarwherewithaggregatesinputSchema;
