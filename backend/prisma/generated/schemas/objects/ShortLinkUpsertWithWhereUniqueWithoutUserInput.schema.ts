import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ShortLinkWhereUniqueInputObjectSchema as ShortLinkWhereUniqueInputObjectSchema } from './ShortLinkWhereUniqueInput.schema';
import { ShortLinkUpdateWithoutUserInputObjectSchema as ShortLinkUpdateWithoutUserInputObjectSchema } from './ShortLinkUpdateWithoutUserInput.schema';
import { ShortLinkUncheckedUpdateWithoutUserInputObjectSchema as ShortLinkUncheckedUpdateWithoutUserInputObjectSchema } from './ShortLinkUncheckedUpdateWithoutUserInput.schema';
import { ShortLinkCreateWithoutUserInputObjectSchema as ShortLinkCreateWithoutUserInputObjectSchema } from './ShortLinkCreateWithoutUserInput.schema';
import { ShortLinkUncheckedCreateWithoutUserInputObjectSchema as ShortLinkUncheckedCreateWithoutUserInputObjectSchema } from './ShortLinkUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ShortLinkWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ShortLinkUpdateWithoutUserInputObjectSchema), z.lazy(() => ShortLinkUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ShortLinkCreateWithoutUserInputObjectSchema), z.lazy(() => ShortLinkUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ShortLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ShortLinkUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkUpsertWithWhereUniqueWithoutUserInput>;
export const ShortLinkUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
