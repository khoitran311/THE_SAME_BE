import { Injectable } from '@nestjs/common';
import { Roles } from './roles.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private rolesRepository: Repository<Roles>,
  ) {}

  async findAll(): Promise<Roles[]> {
    return this.rolesRepository.find();
  }

  async findOne(id: number): Promise<Roles> {
    return this.rolesRepository.findOne({ where: { id } });
  }

  async create(Roles: Partial<Roles>): Promise<Roles> {
    const newRoles = this.rolesRepository.create(Roles);
    return this.rolesRepository.save(newRoles);
  }

  async update(id: number, Roles: Partial<Roles>): Promise<Roles> {
    await this.rolesRepository.update(id, Roles);
    return this.rolesRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.rolesRepository.delete(id);
  }

  async findByName(name: string): Promise<Roles> {
    return this.rolesRepository.findOne({
      where: {
        name,
      },
    });
  }

  async findListRole(roles: number[]): Promise<Partial<Roles[]>> {
    return await Promise.all(
      roles.map(
        async (uuidRole) =>
          await this.rolesRepository.findOne({
            where: { id: uuidRole },
          }),
      ),
    );
  }
}
