import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRolesDto } from './roles.dto';
import { Roles } from './roles.entity';
import { FormDataRequest } from 'nestjs-form-data';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  //get all Roles
  @Get()
  async findAll(): Promise<Roles[]> {
    return this.rolesService.findAll();
  }

  //get user by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Roles> {
    const user = await this.rolesService.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    } else {
      return user;
    }
  }

  //create role
  @Post()
  @FormDataRequest()
  async create(@Body() roles: CreateRolesDto): Promise<Roles> {
    return this.rolesService.create(roles);
  }

  //update user
  @Put(':id')
  @FormDataRequest()
  async update(@Param('id') id: number, @Body() role: Roles): Promise<Roles> {
    return this.rolesService.update(id, role);
  }

  //delete user
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if user does not exist
    const user = await this.rolesService.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return this.rolesService.delete(id);
  }
}
