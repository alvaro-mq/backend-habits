import { AbstractEntity } from '../../common/dto/abstract-entity.dto';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Status } from '../../common/enums/status.enum';
import { Role } from './role.entity';

export const StatusEnum = [
  Status.CREATE,
  Status.PENDING,
  Status.ACTIVE,
  Status.INACTIVE,
];

@Entity()
export class User extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50, unique: true })
  username: string;

  @Column({ length: 255 })
  password: string;

  @Column({ nullable: true })
  email: string;

  @Column({ type: 'enum', enum: StatusEnum, default: Status.CREATE })
  status: string;

  @ManyToOne(() => Role, {
    eager: true,
  })
  role?: Role | null;
}
