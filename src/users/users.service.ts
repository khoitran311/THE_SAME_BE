import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { RolesService } from 'src/roles/roles.service';
import { InterestService } from 'src/interest/interest.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private readonly rolesService: RolesService,
    private readonly interestService: InterestService,
  ) {}

  async findAll(): Promise<Users[]> {
    return this.usersRepository.find({
      relations: ['role'],
    });
  }

  async findOne(id: number): Promise<Users> {
    return this.usersRepository.findOne({
      where: { id },
      relations: ['role'],
    });
  }

  async findByUsername(username: string): Promise<Users> {
    console.log(username);
    return this.usersRepository.findOneOrFail({
      where: {
        username,
      },
    });
  }

  async create(Users: CreateUserDto): Promise<Users> {
    const roles = await this.rolesService.findListRole(Users.role);

    const newUser: Users = await this.usersRepository.save({
      ...Users,
      ...{
        role: roles,
        interest: [],
      },
    });

    return newUser;
  }

  async update(id: number, Users: UpdateUserDto): Promise<Users> {
    let updateUser: Users;
    // Get User Current
    updateUser = {
      ...updateUser,
      ...this.usersRepository.findOne({ where: { id }, relations: ['role', 'interest'] }),
    };

    // Change Role New
    if (Users.role) {
      const role = await this.rolesService.findListRole(Users.role);
      updateUser = await this.usersRepository.save({
        ...Users,
        ...{
          role: role,
          interest: updateUser.interest,
        },
      });
    }

    // Change Interest New
    if (Users.interest) {
      const interest = await this.interestService.findListInterest(Users.interest);
      updateUser = await this.usersRepository.save({
        ...Users,
        ...{
          role: updateUser.role,
          interest: interest,
        },
      });
    }

    await this.usersRepository.update(id, updateUser);
    return this.usersRepository.findOne({ where: { id }, relations: ['role', 'interest'] });
  }

  async delete(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
