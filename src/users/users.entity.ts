import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Roles } from '../roles/roles.entity';
import { Interest } from 'src/interest/interest.entity';
import { genderUser } from 'src/app/enum/common';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  last_name: string;

  @Column()
  first_name: string;

  @Column({ type: 'enum', enum: genderUser, default: genderUser.OTHER })
  gender: genderUser;

  @Column()
  avatar: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @ManyToMany(() => Roles, (role) => role.user, {
    cascade: true,
  })
  @JoinTable()
  role: Roles[];

  @Column({
    unique: false,
    nullable: true,
  })
  address: string;

  @ManyToMany(() => Interest, (interest) => interest.user, {
    cascade: true,
  })
  @JoinTable()
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
