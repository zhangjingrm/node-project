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
    let querySQL = "project.projectName = :projectName AND project.companyName = :companyName AND project.status = :status"
    return await this.projectRepository
      .createQueryBuilder('project')
      .where(querySQL, { companyName: companyName, projectName: projectName, status: status })
      .getMany();
  }
}