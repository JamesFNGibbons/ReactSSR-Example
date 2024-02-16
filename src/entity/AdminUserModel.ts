import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("Admin_Users")
export class AdminUserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  disabled: boolean;
}
