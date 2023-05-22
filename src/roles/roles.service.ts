import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from './roles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private RolesRepository: Repository<Roles>,
  ) {}

  async create(Roles: Partial<Roles>): Promise<Roles> {
    const newRoles = this.RolesRepository.create(Roles);
    return this.RolesRepository.save(newRoles);
  }
}
