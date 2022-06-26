import { Column, Entity } from 'typeorm';
import { BaseEntiity } from '../../base/entity.base';

@Entity('users')
export class User extends BaseEntiity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
