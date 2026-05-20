import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ShortLinkCreateManyUserInputObjectSchema as ShortLinkCreateManyUserInputObjectSchema } from './ShortLinkCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ShortLinkCreateManyUserInputObjectSchema), z.lazy(() => ShortLinkCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ShortLinkCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ShortLinkCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ShortLinkCreateManyUserInputEnvelope>;
export const ShortLinkCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
