import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


@Component({
  selector: 'courses',
  template: `
            <h2>{{ getTitle() }}</h2>
            <ul>
              <li *ngFor="let cour of cours">{{ cour }}</li>
            </ul>

            <ul>
              <li *ngFor="let course of courses">{{ course }}</li>
            </ul>
            `
})
export class CoursesComponent{
  title = 'La liste des cours';
  getTitle(){
    return this.title;
  }

  // use *ngFor directive in the template to display list of courses
  cours = ['course1', 'course2', 'course3'];

  // Logic for calling an HTTP service
  courses;

  // Dependency injection
  constructor(service: CoursesService){
    this.courses = service.getCourses();
  }
}
