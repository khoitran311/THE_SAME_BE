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
      relations: ['role', 'interest'],
    });
  }

  async findOne(id: number): Promise<Users> {
    return this.usersRepository.findOne({
      where: { id },
      relations: ['role', 'interest'],
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

  async update(id: number, UsersData: UpdateUserDto): Promise<Users> {
    // Change Role New
    if (UsersData.role) {
      const actualRelationshipRole = await this.usersRepository
        .createQueryBuilder()
        .relation(Users, 'role')
        .of(id)
        .loadMany();
      const roleCurrent = await this.rolesService.findListRole(UsersData.role);
      await this.usersRepository
        .createQueryBuilder()
        .relation(Users, 'role')
        .of(id)
        .addAndRemove(roleCurrent, actualRelationshipRole);
    }

    // Change Interest New
    if (UsersData.interest) {
      const actualRelationshipInterest = await this.usersRepository
        .createQueryBuilder()
        .relation(Users, 'interest')
        .of(id)
        .loadMany();
      const interestCurrent = await this.interestService.findListInterest(UsersData.interest);
      await this.usersRepository
        .createQueryBuilder()
        .relation(Users, 'interest')
        .of(id)
        .addAndRemove(interestCurrent, actualRelationshipInterest);
    }

    await this.usersRepository
      .createQueryBuilder()
      .update()
      .set({
        username: UsersData.username,
        gender: UsersData.gender,
        avatar: UsersData.avatar,
        email: UsersData.email,
        password: UsersData.password,
        address: UsersData.address,
        update_at: new Date(),
      })
      .where('id = :id', { id: id })
      .execute();

    return await this.usersRepository.findOne({
      where: { id },
      relations: ['role', 'interest'],
    });
  }

  async delete(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
