import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ShortLinkCreateWithoutUserInputObjectSchema as ShortLinkCreateWithoutUserInputObjectSchema } from './ShortLinkCreateWithoutUserInput.schema';
import { ShortLinkUncheckedCreateWithoutUserInputObjectSchema as ShortLinkUncheckedCreateWithoutUserInputObjectSchema } from './ShortLinkUncheckedCreateWithoutUserInput.schema';
import { ShortLinkCreateOrConnectWithoutUserInputObjectSchema as ShortLinkCreateOrConnectWithoutUserInputObjectSchema } from './ShortLinkCreateOrConnectWithoutUserInput.schema';
import { ShortLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema as ShortLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ShortLinkUpsertWithWhereUniqueWithoutUserInput.schema';
import { ShortLinkCreateManyUserInputEnvelopeObjectSchema as ShortLinkCreateManyUserInputEnvelopeObjectSchema } from './ShortLinkCreateManyUserInputEnvelope.schema';
import { ShortLinkWhereUniqueInputObjectSchema as ShortLinkWhereUniqueInputObjectSchema } from './ShortLinkWhereUniqueInput.schema';
import { ShortLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema as ShortLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ShortLinkUpdateWithWhereUniqueWithoutUserInput.schema';
import { ShortLinkUpdateManyWithWhereWithoutUserInputObjectSchema as ShortLinkUpdateManyWithWhereWithoutUserInputObjectSchema } from './ShortLinkUpdateManyWithWhereWithoutUserInput.schema';
import { ShortLinkScalarWhereInputObjectSchema as ShortLinkScalarWhereInputObjectSchema } from './ShortLinkScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ShortLinkCreateWithoutUserInputObjectSchema), z.lazy(() => ShortLinkCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ShortLinkUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ShortLinkUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ShortLinkCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ShortLinkCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ShortLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ShortLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ShortLinkCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ShortLinkWhereUniqueInputObjectSchema), z.lazy(() => ShortLinkWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ShortLinkWhereUniqueInputObjectSchema), z.lazy(() => ShortLinkWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ShortLinkWhereUniqueInputObjectSchema), z.lazy(() => ShortLinkWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ShortLinkWhereUniqueInputObjectSchema), z.lazy(() => ShortLinkWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ShortLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ShortLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ShortLinkUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => ShortLinkUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ShortLinkScalarWhereInputObjectSchema), z.lazy(() => ShortLinkScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ShortLinkUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.ShortLinkUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkUpdateManyWithoutUserNestedInput>;
export const ShortLinkUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
