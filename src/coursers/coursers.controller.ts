import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpCode,
  Delete,
  Patch,
} from '@nestjs/common';
import { CoursersService } from './coursers.service';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';

@Controller('coursers')
export class CoursersController {
  constructor(private readonly courseService: CoursersService) {}
  @Get()
  findAll() {
    return this.courseService.findAll();
    // return response.status(200).json({ message: 'listagem de cursos' });
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.courseService.findById(id);
    // return `O curso que você pesquisou é ${params.id} e a classe é ${params.classe}`;
  }

  @Post()
  create(@Body() createCourseDTO: CreateCourseDTO) {
    return this.courseService.create(createCourseDTO);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCourseDTO: UpdateCourseDTO) {
    return this.courseService.update(id, updateCourseDTO);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: number) {
    return this.courseService.delete(id);
  }
}
