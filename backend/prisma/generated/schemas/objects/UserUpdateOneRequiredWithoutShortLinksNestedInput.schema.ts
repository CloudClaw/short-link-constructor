import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateWithoutShortLinksInputObjectSchema as UserCreateWithoutShortLinksInputObjectSchema } from './UserCreateWithoutShortLinksInput.schema';
import { UserUncheckedCreateWithoutShortLinksInputObjectSchema as UserUncheckedCreateWithoutShortLinksInputObjectSchema } from './UserUncheckedCreateWithoutShortLinksInput.schema';
import { UserCreateOrConnectWithoutShortLinksInputObjectSchema as UserCreateOrConnectWithoutShortLinksInputObjectSchema } from './UserCreateOrConnectWithoutShortLinksInput.schema';
import { UserUpsertWithoutShortLinksInputObjectSchema as UserUpsertWithoutShortLinksInputObjectSchema } from './UserUpsertWithoutShortLinksInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutShortLinksInputObjectSchema as UserUpdateToOneWithWhereWithoutShortLinksInputObjectSchema } from './UserUpdateToOneWithWhereWithoutShortLinksInput.schema';
import { UserUpdateWithoutShortLinksInputObjectSchema as UserUpdateWithoutShortLinksInputObjectSchema } from './UserUpdateWithoutShortLinksInput.schema';
import { UserUncheckedUpdateWithoutShortLinksInputObjectSchema as UserUncheckedUpdateWithoutShortLinksInputObjectSchema } from './UserUncheckedUpdateWithoutShortLinksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutShortLinksInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutShortLinksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutShortLinksInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutShortLinksInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutShortLinksInputObjectSchema), z.lazy(() => UserUpdateWithoutShortLinksInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutShortLinksInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutShortLinksNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutShortLinksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutShortLinksNestedInput>;
export const UserUpdateOneRequiredWithoutShortLinksNestedInputObjectZodSchema = makeSchema();
