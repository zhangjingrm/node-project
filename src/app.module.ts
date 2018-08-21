import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from 'rest-api/project';
import { Project } from 'domain/project/project.entrity';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "127.0.0.1",
    "port": 3306,
    "username": "root",
    "password": "test1",
    "database": "sale",
    "entities": [
      Project,
      "src/domain/**/**.entity{.ts,.js}",
    ],
    "synchronize": true,
    logging: true
  }), ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
