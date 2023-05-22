import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { CreateUserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //get all users
  @Get()
  async findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  //get user by id
  @Get(':id')
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
  async create(@Body() user: CreateUserDto): Promise<Users> {
    return this.usersService.create(user);
  }

  //update user
  @Put(':id')
  async update(@Param('id') id: number, @Body() user: Users): Promise<any> {
    return this.usersService.update(id, user);
  }

  //delete user
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if user does not exist
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return this.usersService.delete(id);
  }
}
