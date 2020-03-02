import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
            <h2>this is property binding</h2>
            <h2>{{ title}}</h2>
            <h1 [textContent]="title"></h1>
            <img src="{{imageUrl}}">
            <br>
            <img [src]="imageUrl">
            <h2>this is attribute binding</h2>
            <table>
              <td [attr.colspan]="colspan">ok</td>
            </table>
            <h2>Class Binding</h2>
            <button class="btn btn-primary" [class.active]="isActive">Save</button>
            <h2>Style binding</h2>
            <button [style.backgroundColor]="isActivated ? 'blue' : 'white' ">Enregistrer</button>
            `
})

export class CoursesComponent {
  // Property binding
  title = 'Display data and handling Events';
  imageUrl = 'http://lorempixel.com/400/200';

  // Attribute Binding
  colspan = 2;

  // class binding
  isActive = true;

  // Style binding
  isActivated = false;
}
