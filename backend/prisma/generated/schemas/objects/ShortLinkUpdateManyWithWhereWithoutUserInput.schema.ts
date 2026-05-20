import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ShortLinkScalarWhereInputObjectSchema as ShortLinkScalarWhereInputObjectSchema } from './ShortLinkScalarWhereInput.schema';
import { ShortLinkUpdateManyMutationInputObjectSchema as ShortLinkUpdateManyMutationInputObjectSchema } from './ShortLinkUpdateManyMutationInput.schema';
import { ShortLinkUncheckedUpdateManyWithoutUserInputObjectSchema as ShortLinkUncheckedUpdateManyWithoutUserInputObjectSchema } from './ShortLinkUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ShortLinkScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ShortLinkUpdateManyMutationInputObjectSchema), z.lazy(() => ShortLinkUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const ShortLinkUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ShortLinkUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkUpdateManyWithWhereWithoutUserInput>;
export const ShortLinkUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
