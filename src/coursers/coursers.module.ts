import { Module } from '@nestjs/common';
import { CoursersController } from './coursers.controller';
import { CoursersService } from './coursers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/courses.entity';
import { Tag } from './entities/Tags.entity';

@Module({
  controllers: [CoursersController],
  providers: [CoursersService],
  imports: [TypeOrmModule.forFeature([Course, Tag])],
})
export class CoursersModule {}
