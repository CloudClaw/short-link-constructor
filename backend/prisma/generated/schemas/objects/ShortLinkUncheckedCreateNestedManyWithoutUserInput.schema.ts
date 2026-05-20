import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ShortLinkCreateWithoutUserInputObjectSchema as ShortLinkCreateWithoutUserInputObjectSchema } from './ShortLinkCreateWithoutUserInput.schema';
import { ShortLinkUncheckedCreateWithoutUserInputObjectSchema as ShortLinkUncheckedCreateWithoutUserInputObjectSchema } from './ShortLinkUncheckedCreateWithoutUserInput.schema';
import { ShortLinkCreateOrConnectWithoutUserInputObjectSchema as ShortLinkCreateOrConnectWithoutUserInputObjectSchema } from './ShortLinkCreateOrConnectWithoutUserInput.schema';
import { ShortLinkCreateManyUserInputEnvelopeObjectSchema as ShortLinkCreateManyUserInputEnvelopeObjectSchema } from './ShortLinkCreateManyUserInputEnvelope.schema';
import { ShortLinkWhereUniqueInputObjectSchema as ShortLinkWhereUniqueInputObjectSchema } from './ShortLinkWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ShortLinkCreateWithoutUserInputObjectSchema), z.lazy(() => ShortLinkCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ShortLinkUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ShortLinkUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ShortLinkCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ShortLinkCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ShortLinkCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ShortLinkWhereUniqueInputObjectSchema), z.lazy(() => ShortLinkWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ShortLinkUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.ShortLinkUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkUncheckedCreateNestedManyWithoutUserInput>;
export const ShortLinkUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
