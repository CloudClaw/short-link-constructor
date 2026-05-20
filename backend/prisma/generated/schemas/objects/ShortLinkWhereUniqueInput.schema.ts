import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const ShortLinkWhereUniqueInputObjectSchema: z.ZodType<Prisma.ShortLinkWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkWhereUniqueInput>;
export const ShortLinkWhereUniqueInputObjectZodSchema = makeSchema();
