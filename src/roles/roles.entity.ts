import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Users } from '../users/users.entity';

@Entity()
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  update_at: Date;

  @Column()
  created_at: Date;

  @ManyToOne(() => Users, (user) => user.role)
  user: Users;
}
