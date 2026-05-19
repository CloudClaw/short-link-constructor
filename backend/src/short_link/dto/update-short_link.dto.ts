import { PartialType } from '@nestjs/mapped-types';
import { CreateShortLinkDto } from './create-short_link.dto';

export class UpdateShortLinkDto extends PartialType(CreateShortLinkDto) {}
