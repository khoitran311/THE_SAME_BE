import { DataSource } from 'typeorm';
import { Roles } from './roles.entity';

export const rolesProviders = [
  {
    provide: 'ROLES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Roles),
    inject: ['DATA_SOURCE'],
  },
];
