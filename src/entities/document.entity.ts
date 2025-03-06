import BaseEntity from './base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class DocumentEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  filepath: string;

  @Column()
  directory: string;

  @Column()
  ownerid: string;

  @Column()
  status: string;
}
