import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutShortLinksInputObjectSchema as UserUpdateWithoutShortLinksInputObjectSchema } from './UserUpdateWithoutShortLinksInput.schema';
import { UserUncheckedUpdateWithoutShortLinksInputObjectSchema as UserUncheckedUpdateWithoutShortLinksInputObjectSchema } from './UserUncheckedUpdateWithoutShortLinksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutShortLinksInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutShortLinksInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutShortLinksInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutShortLinksInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutShortLinksInput>;
export const UserUpdateToOneWithWhereWithoutShortLinksInputObjectZodSchema = makeSchema();
