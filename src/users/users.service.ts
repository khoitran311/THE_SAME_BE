import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<Users> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async create(Users: Partial<Users>): Promise<Users> {
    const newUsers = this.usersRepository.create(Users);
    return this.usersRepository.save(newUsers);
  }

  async update(id: number, Users: Partial<Users>): Promise<Users> {
    await this.usersRepository.update(id, Users);
    return this.usersRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
