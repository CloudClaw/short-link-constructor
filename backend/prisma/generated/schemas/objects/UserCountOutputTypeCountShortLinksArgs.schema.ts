import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ShortLinkWhereInputObjectSchema as ShortLinkWhereInputObjectSchema } from './ShortLinkWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ShortLinkWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountShortLinksArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountShortLinksArgsObjectZodSchema = makeSchema();
