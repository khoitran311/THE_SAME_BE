import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RolesService } from 'src/roles/roles.service';
import { RegisterDto } from './auth.dto';
import { Users } from 'src/users/users.entity';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly rolesService: RolesService) {}

  async register(register: RegisterDto): Promise<Users> {
    const roles = await this.rolesService.findByName('User');
    console.log(roles);
    const newUser: Users = await this.usersService.create({
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
