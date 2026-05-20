import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ShortLinkWhereUniqueInputObjectSchema as ShortLinkWhereUniqueInputObjectSchema } from './ShortLinkWhereUniqueInput.schema';
import { ShortLinkUpdateWithoutUserInputObjectSchema as ShortLinkUpdateWithoutUserInputObjectSchema } from './ShortLinkUpdateWithoutUserInput.schema';
import { ShortLinkUncheckedUpdateWithoutUserInputObjectSchema as ShortLinkUncheckedUpdateWithoutUserInputObjectSchema } from './ShortLinkUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ShortLinkWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ShortLinkUpdateWithoutUserInputObjectSchema), z.lazy(() => ShortLinkUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ShortLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ShortLinkUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkUpdateWithWhereUniqueWithoutUserInput>;
export const ShortLinkUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
