import BaseEntity from './base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class DirectoryEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  status: string;

}
