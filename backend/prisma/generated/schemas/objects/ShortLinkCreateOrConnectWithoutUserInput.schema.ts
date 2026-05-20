import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ShortLinkWhereUniqueInputObjectSchema as ShortLinkWhereUniqueInputObjectSchema } from './ShortLinkWhereUniqueInput.schema';
import { ShortLinkCreateWithoutUserInputObjectSchema as ShortLinkCreateWithoutUserInputObjectSchema } from './ShortLinkCreateWithoutUserInput.schema';
import { ShortLinkUncheckedCreateWithoutUserInputObjectSchema as ShortLinkUncheckedCreateWithoutUserInputObjectSchema } from './ShortLinkUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ShortLinkWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ShortLinkCreateWithoutUserInputObjectSchema), z.lazy(() => ShortLinkUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ShortLinkCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.ShortLinkCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkCreateOrConnectWithoutUserInput>;
export const ShortLinkCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
