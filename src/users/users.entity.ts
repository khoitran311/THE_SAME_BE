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
import { genderUser } from 'src/app/enum/common';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ type: 'enum', enum: genderUser, default: genderUser.OTHER })
  gender: genderUser;

  @Column()
  avatar: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Roles, (role) => role.user, { cascade: ['insert', 'update'] })
  public role: Roles[];

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
