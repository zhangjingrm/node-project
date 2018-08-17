import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project')
export class Project {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  projectName: string;

  @Column({ length: 200 })
  companyName: string;

  @Column()
  status: number;
}