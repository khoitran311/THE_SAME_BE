import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { TransformInterceptor } from '../transform.interceptor';
import { ResponseMessage } from '../response.decorator';
import { USER_DELETED, USER_INSERTED, USER_SELECTED, USER_UPDATED } from 'src/response.constants';
import { FormDataRequest } from 'nestjs-form-data';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //get all users
  @Get()
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage(USER_SELECTED)
  async findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  //get user by id
  @Get(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage(USER_SELECTED)
  async findOne(@Param('id') id: number): Promise<Users> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    } else {
      return user;
    }
  }

  //create user
  @Post()
  @FormDataRequest()
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage(USER_INSERTED)
  async create(@Body() user: CreateUserDto): Promise<Users> {
    return this.usersService.create(user);
  }

  //update user
  @Put(':id')
  @FormDataRequest()
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage(USER_UPDATED)
  async update(@Param('id') id: number, @Body() user: UpdateUserDto): Promise<Users> {
    return this.usersService.update(id, user);
  }

  //delete user
  @Delete(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage(USER_DELETED)
  async delete(@Param('id') id: number): Promise<void> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return this.usersService.delete(id);
  }
}
