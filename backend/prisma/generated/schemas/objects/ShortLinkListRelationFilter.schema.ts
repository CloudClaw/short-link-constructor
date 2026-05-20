import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ShortLinkWhereInputObjectSchema as ShortLinkWhereInputObjectSchema } from './ShortLinkWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ShortLinkWhereInputObjectSchema).optional(),
  some: z.lazy(() => ShortLinkWhereInputObjectSchema).optional(),
  none: z.lazy(() => ShortLinkWhereInputObjectSchema).optional()
}).strict();
export const ShortLinkListRelationFilterObjectSchema: z.ZodType<Prisma.ShortLinkListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkListRelationFilter>;
export const ShortLinkListRelationFilterObjectZodSchema = makeSchema();
