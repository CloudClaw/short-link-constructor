import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  originalLink: z.boolean().optional(),
  shortLink: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const ShortLinkSelectObjectSchema: z.ZodType<Prisma.ShortLinkSelect> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkSelect>;
export const ShortLinkSelectObjectZodSchema = makeSchema();
