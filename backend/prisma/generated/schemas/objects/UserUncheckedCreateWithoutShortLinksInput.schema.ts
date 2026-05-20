import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const UserUncheckedCreateWithoutShortLinksInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutShortLinksInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutShortLinksInput>;
export const UserUncheckedCreateWithoutShortLinksInputObjectZodSchema = makeSchema();
