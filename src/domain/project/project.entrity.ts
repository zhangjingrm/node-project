import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project')
export class Project {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  projectName: string;

  @Column({ length: 255 })
  companyName: string;

  @Column()
  status: number;


}