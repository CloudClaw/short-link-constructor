import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ShortLinkUncheckedCreateNestedManyWithoutUserInputObjectSchema as ShortLinkUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ShortLinkUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.email(),
  password: z.string().min(6),
  createdAt: z.coerce.date().optional(),
  shortLinks: z.lazy(() => ShortLinkUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
