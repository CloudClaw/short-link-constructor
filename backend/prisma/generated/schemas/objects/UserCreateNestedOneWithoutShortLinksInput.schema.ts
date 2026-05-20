import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateWithoutShortLinksInputObjectSchema as UserCreateWithoutShortLinksInputObjectSchema } from './UserCreateWithoutShortLinksInput.schema';
import { UserUncheckedCreateWithoutShortLinksInputObjectSchema as UserUncheckedCreateWithoutShortLinksInputObjectSchema } from './UserUncheckedCreateWithoutShortLinksInput.schema';
import { UserCreateOrConnectWithoutShortLinksInputObjectSchema as UserCreateOrConnectWithoutShortLinksInputObjectSchema } from './UserCreateOrConnectWithoutShortLinksInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutShortLinksInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutShortLinksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutShortLinksInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutShortLinksInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutShortLinksInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutShortLinksInput>;
export const UserCreateNestedOneWithoutShortLinksInputObjectZodSchema = makeSchema();
