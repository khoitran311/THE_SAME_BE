import { IsNotEmpty } from 'class-validator';

export class CreateRolesDto {
  @IsNotEmpty()
  name: string;
}
