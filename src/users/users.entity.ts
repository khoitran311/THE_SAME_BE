import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Roles } from '../roles/roles.entity';
import { Interest } from 'src/interest/interest.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  gender: string;

  @Column()
  avatar: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Roles, (role) => role.user)
  role: Roles[];

  @Column()
  address: string;

  @OneToMany(() => Interest, (interest) => interest.user)
  interest: Interest[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  update_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;
}
