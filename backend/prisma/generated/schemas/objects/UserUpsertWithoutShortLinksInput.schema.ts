import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserUpdateWithoutShortLinksInputObjectSchema as UserUpdateWithoutShortLinksInputObjectSchema } from './UserUpdateWithoutShortLinksInput.schema';
import { UserUncheckedUpdateWithoutShortLinksInputObjectSchema as UserUncheckedUpdateWithoutShortLinksInputObjectSchema } from './UserUncheckedUpdateWithoutShortLinksInput.schema';
import { UserCreateWithoutShortLinksInputObjectSchema as UserCreateWithoutShortLinksInputObjectSchema } from './UserCreateWithoutShortLinksInput.schema';
import { UserUncheckedCreateWithoutShortLinksInputObjectSchema as UserUncheckedCreateWithoutShortLinksInputObjectSchema } from './UserUncheckedCreateWithoutShortLinksInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutShortLinksInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutShortLinksInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutShortLinksInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutShortLinksInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutShortLinksInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutShortLinksInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutShortLinksInput>;
export const UserUpsertWithoutShortLinksInputObjectZodSchema = makeSchema();
