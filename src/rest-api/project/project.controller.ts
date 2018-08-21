import { Get, Post, Controller, Req, Param, Body } from '@nestjs/common';
import { ProjectService } from '../../application/project/project.service';
import { Project } from '../../domain/project/project.entrity';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  // @Get()
  // findAll(): Promise<Project[]> {
  //   return this.projectService.findAll();
  // }

  @Post()
  findAll(@Body() params: Project): Promise<Project[]> {
    console.log(params, 888);
    return this.projectService.findMany(params);
  }

  @Get(':id')
  findOne(@Param() params): Promise<Project> {
    return this.projectService.findId(params);
  }


  
}