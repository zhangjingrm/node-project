import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../../domain/project/project.entrity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>
  ){ }

  async findAll(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  async findId(params): Promise<Project> {
    return await this.projectRepository
      .createQueryBuilder('project')
      .where("project.id = :id", { id : params.id})
      .getOne();
  }

  async findMany(params): Promise<Project[]> {
    let { companyName, projectName, status } = params;
    let querySQL = "project.projectName = :projectName AND project.companyName = :companyName AND project.status = :status";
    return await this.projectRepository
      .createQueryBuilder('project')
      .where(querySQL, { companyName: companyName, projectName: projectName, status: status })
      .getMany();
  }

  async insert(params): Promise<any> {
    return await this.projectRepository
      .createQueryBuilder()
      .insert()
      .into('project')
      .values([params])
      .execute();
  }

  async delete(params): Promise<any> {
    return await this.projectRepository
      .createQueryBuilder()
      .delete()
      .from('project')
      .where("id = :id", {id: params.id})
      .execute();
  }

  async update(params): Promise<any> {
    let { companyName, projectName, status } = params;
    let obj = { projectName: projectName, companyName: companyName, status: status };
    console.log(obj, 999);
    return await this.projectRepository
      .createQueryBuilder()
      .update()
      .set(obj)
      .where("id = :id", {id: params.id})
      .execute();
  }
}