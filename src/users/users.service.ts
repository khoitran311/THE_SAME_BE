import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private UsersRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return this.UsersRepository.find();
  }

  async findOne(id: number): Promise<Users> {
    return this.UsersRepository.findOne({ where: { id } });
  }

  async findByUsername(username: string): Promise<Users> {
    console.log(username);
    return this.UsersRepository?.findOneOrFail({
      where: {
        username,
      },
    });
  }

  async create(Users: Partial<Users>): Promise<Users> {
    const newUsers = this.UsersRepository.create(Users);
    return this.UsersRepository.save(newUsers);
  }

  async update(id: number, Users: Partial<Users>): Promise<Users> {
    await this.UsersRepository.update(id, Users);
    return this.UsersRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.UsersRepository.delete(id);
  }
}
