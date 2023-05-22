import { Body, Controller, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRolesDto } from './roles.dto';
import { Roles } from './roles.entity';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  //create role
  @Post()
  async create(@Body() roles: CreateRolesDto): Promise<Roles> {
    return this.rolesService.create(roles);
  }
}
