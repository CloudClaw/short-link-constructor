import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const ShortLinkIncludeObjectSchema: z.ZodType<Prisma.ShortLinkInclude> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkInclude>;
export const ShortLinkIncludeObjectZodSchema = makeSchema();
