import { Get, Post, Controller, Req, Param } from '@nestjs/common';
import { ProjectService } from '../../application/project/project.service';
import { Project } from '../../domain/project/project.entrity';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  debugger;

  @Post()
  create() {

  }

  @Get()
  findAll(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param() params) {
    console.log(params.id);
    return {}
  }
  
}