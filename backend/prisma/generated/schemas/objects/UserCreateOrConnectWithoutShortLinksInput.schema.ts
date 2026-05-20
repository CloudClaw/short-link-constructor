import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutShortLinksInputObjectSchema as UserCreateWithoutShortLinksInputObjectSchema } from './UserCreateWithoutShortLinksInput.schema';
import { UserUncheckedCreateWithoutShortLinksInputObjectSchema as UserUncheckedCreateWithoutShortLinksInputObjectSchema } from './UserUncheckedCreateWithoutShortLinksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutShortLinksInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutShortLinksInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutShortLinksInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutShortLinksInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutShortLinksInput>;
export const UserCreateOrConnectWithoutShortLinksInputObjectZodSchema = makeSchema();
