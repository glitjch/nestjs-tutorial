import { IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  line1: string;

  line2?: string;

  @IsNotEmpty()
  postalCode: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  province: string;
}
