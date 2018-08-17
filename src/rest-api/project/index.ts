import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectServiceModule } from '../../application/project';

@Module({
  imports: [ProjectServiceModule],
  controllers: [ProjectController]
})
export class ProjectModule { }