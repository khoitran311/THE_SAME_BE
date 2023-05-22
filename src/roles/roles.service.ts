import { Inject, Injectable } from '@nestjs/common';
import { Roles } from './roles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @Inject('ROLES_REPOSITORY')
    private rolesRepository: Repository<Roles>,
  ) {}

  async create(Roles: Partial<Roles>): Promise<Roles> {
    const newRoles = this.rolesRepository.create(Roles);
    return this.rolesRepository.save(newRoles);
  }
}
