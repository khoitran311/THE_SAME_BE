import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Categorys {
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
}
