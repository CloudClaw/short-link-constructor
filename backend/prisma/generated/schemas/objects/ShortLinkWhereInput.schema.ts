import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const shortlinkwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ShortLinkWhereInputObjectSchema), z.lazy(() => ShortLinkWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ShortLinkWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ShortLinkWhereInputObjectSchema), z.lazy(() => ShortLinkWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  originalLink: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  shortLink: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const ShortLinkWhereInputObjectSchema: z.ZodType<Prisma.ShortLinkWhereInput> = shortlinkwhereinputSchema as unknown as z.ZodType<Prisma.ShortLinkWhereInput>;
export const ShortLinkWhereInputObjectZodSchema = shortlinkwhereinputSchema;
