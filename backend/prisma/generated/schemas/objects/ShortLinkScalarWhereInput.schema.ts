import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const shortlinkscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ShortLinkScalarWhereInputObjectSchema), z.lazy(() => ShortLinkScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ShortLinkScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ShortLinkScalarWhereInputObjectSchema), z.lazy(() => ShortLinkScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  originalLink: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  shortLink: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ShortLinkScalarWhereInputObjectSchema: z.ZodType<Prisma.ShortLinkScalarWhereInput> = shortlinkscalarwhereinputSchema as unknown as z.ZodType<Prisma.ShortLinkScalarWhereInput>;
export const ShortLinkScalarWhereInputObjectZodSchema = shortlinkscalarwhereinputSchema;
