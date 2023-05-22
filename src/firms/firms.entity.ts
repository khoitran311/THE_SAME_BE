import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
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

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  update_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @OneToOne(() => Categorys)
  @JoinColumn()
  category_id: Categorys;

  @ManyToOne(() => Recommends, (user) => user.firms)
  recommends: Recommends;
}
