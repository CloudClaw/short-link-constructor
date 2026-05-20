import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  email: z.email(),
  password: z.string().min(6),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const UserCreateWithoutShortLinksInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutShortLinksInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutShortLinksInput>;
export const UserCreateWithoutShortLinksInputObjectZodSchema = makeSchema();
