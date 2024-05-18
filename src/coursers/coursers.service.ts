import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './courses.entity';

@Injectable()
export class CoursersService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Nest.js',
      description: 'curso sobre fundamentos do framework Nest.js',
      tags: ['Node.js', 'Typescript', 'Web', 'Nest.js', 'Javascript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findById(id: number): Course {
    const course = this.courses.find((course) => course.id === id) as Course;
    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found!`);
    }
    return course;
  }

  create(createCourseDTO: any) {
    this.courses.push(createCourseDTO);
    return createCourseDTO;
  }

  update(id: number, updateCourseDTO: any) {
    const existingCourse = this.findById(id);
    if (existingCourse) {
      const index = this.courses.findIndex((course) => course.id == id);
      this.courses[index] = {
        id,
        ...updateCourseDTO,
      };
    }
  }

  delete(id: number) {
    const index = this.courses.findIndex((course) => course.id == id);
    if (index >= 0) {
      this.courses.splice(index, 1);
    }
  }
}
