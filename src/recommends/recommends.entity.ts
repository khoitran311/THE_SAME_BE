import { Interest } from '../interest/interest.entity';
import { Firms } from '../firms/firms.entity';
import { Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Recommends {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Interest)
  @JoinColumn()
  interest: Interest;

  @OneToMany(() => Firms, (firms) => firms.recommends)
  firms: Firms[];
}
