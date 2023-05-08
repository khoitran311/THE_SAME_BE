import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Categorys } from '../categorys/categorys.entity';
import { Recommends } from '../recommends/recommends.entity';

@Entity()
export class Firms {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  release_time: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  update_at: Date;

  @Column()
  created_at: Date;

  @OneToOne(() => Categorys)
  @JoinColumn()
  category_id: Categorys;

  @ManyToOne(() => Recommends, (user) => user.firms)
  recommends: Recommends;
}
