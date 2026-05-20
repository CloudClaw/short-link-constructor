import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ShortLinkCreateNestedManyWithoutUserInputObjectSchema as ShortLinkCreateNestedManyWithoutUserInputObjectSchema } from './ShortLinkCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  email: z.email(),
  password: z.string().min(6),
  createdAt: z.coerce.date().optional(),
  shortLinks: z.lazy(() => ShortLinkCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
