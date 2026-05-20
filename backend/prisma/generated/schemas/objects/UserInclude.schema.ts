import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ShortLinkFindManySchema as ShortLinkFindManySchema } from '../findManyShortLink.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  shortLinks: z.union([z.boolean(), z.lazy(() => ShortLinkFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
