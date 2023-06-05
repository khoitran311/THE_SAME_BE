import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRolesDto } from './roles.dto';
import { Roles } from './roles.entity';
import { FormDataRequest } from 'nestjs-form-data';
import { TransformInterceptor } from 'src/transform.interceptor';
import { ResponseMessage } from '../response.decorator';
import { ROLE_DELETED, ROLE_INSERTED, ROLE_SELECTED, ROLE_UPDATED } from '../response.constants';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  //get all Roles
  @Get()
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage(ROLE_SELECTED)
  async findAll(): Promise<any> {
    const result = this.rolesService.findAll();
    return result;
  }

  //get role by id
  @Get(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage(ROLE_SELECTED)
  async findOne(@Param('id') id: number): Promise<Roles> {
    const role = await this.rolesService.findOne(id);
    if (!role) {
      throw new NotFoundException('Role does not exist!');
    } else {
      return role;
    }
  }

  //create role
  @Post()
  @FormDataRequest()
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage(ROLE_INSERTED)
  async create(@Body() roles: CreateRolesDto): Promise<Roles> {
    // const role = this.rolesService.findByName(roles.name);
    // if (!role) {
    //   throw new NotFoundException('Data already exists!');
    // } else {
    return this.rolesService.create(roles);
    // }
  }

  //update user
  @Put(':id')
  @FormDataRequest()
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage(ROLE_UPDATED)
  async update(@Param('id') id: number, @Body() roles: Roles): Promise<Roles> {
    const role = await this.rolesService.findOne(id);
    if (!role) {
      throw new NotFoundException('Role does not exist!');
    }
    return this.rolesService.update(id, roles);
  }

  //delete user
  @Delete(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage(ROLE_DELETED)
  async delete(@Param('id') id: number): Promise<any> {
    const role = await this.rolesService.findOne(id);
    if (!role) {
      throw new NotFoundException('Role does not exist!');
    }
    return this.rolesService.delete(id);
  }
}
