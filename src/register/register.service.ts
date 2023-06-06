import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './register.dto';
import { Users } from 'src/users/users.entity';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class RegisterService {
  constructor(private readonly userService: UsersService, private readonly rolesService: RolesService) {}

  async register(register: RegisterDto): Promise<Users> {
    const roles = await this.rolesService.findByName('User');
    console.log(roles);
    const newUser: Users = await this.userService.create({
      email: register.email,
      last_name: register.last_name,
      first_name: register.first_name,
      password: register.password,
      role: [roles.id],
      interest: [],
      gender: register.gender,
      address: '',
      avatar: '',
    });

    return newUser;
  }
}
