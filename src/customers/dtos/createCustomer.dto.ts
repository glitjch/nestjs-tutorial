import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  ValidateNested,
} from 'class-validator';

import { CreateAddressDto } from './createAddressDto';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  surname: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}

/**
 * class-validator is a security feature against improper data inserted into the database
 * and also maintains database structure. There are other validators available and references can be found
 * https://github.com/typestack/class-validator
 * nestJS documentation on validation here:
 * https://docs.nestjs.com/techniques/validation
 */
