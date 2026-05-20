import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCountOutputTypeCountShortLinksArgsObjectSchema as UserCountOutputTypeCountShortLinksArgsObjectSchema } from './UserCountOutputTypeCountShortLinksArgs.schema'

const makeSchema = () => z.object({
  shortLinks: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountShortLinksArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
