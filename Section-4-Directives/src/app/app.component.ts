import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives';
  viewMode = "map";

   // ngFor
   courses = [
    {id: 1, name: 'Angular'},
    {id: 2, name: 'Laravel'},
    {id: 3, name: 'React'}
  ];

  onAdd() {
    this.courses.push({id: 4, name: 'NODE'});
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name = 'UPDATED';
  }



}
