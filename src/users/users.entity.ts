import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
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

  @Column()
  update_at: Date;

  @Column()
  created_at: Date;
}
