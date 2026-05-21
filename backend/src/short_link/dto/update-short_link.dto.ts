import { IsNotEmpty, IsUrl } from 'class-validator';

export class UpdateShortLinkDto {
  @IsUrl()
  @IsNotEmpty()
  originalUrl!: string;
}
