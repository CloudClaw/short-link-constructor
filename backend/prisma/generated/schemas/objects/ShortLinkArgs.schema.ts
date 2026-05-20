import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ShortLinkSelectObjectSchema as ShortLinkSelectObjectSchema } from './ShortLinkSelect.schema';
import { ShortLinkIncludeObjectSchema as ShortLinkIncludeObjectSchema } from './ShortLinkInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ShortLinkSelectObjectSchema).optional(),
  include: z.lazy(() => ShortLinkIncludeObjectSchema).optional()
}).strict();
export const ShortLinkArgsObjectSchema = makeSchema();
export const ShortLinkArgsObjectZodSchema = makeSchema();
