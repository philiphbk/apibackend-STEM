import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Tutor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  subject: string;

  @Column()
  email: string;
}
