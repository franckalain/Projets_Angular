import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
            <h2>this is property binding</h2>
            <h2>{{ title}}</h2>
            <h3 [textContent]="title"></h3>
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
            <h2>Event binding</h2>
            <div (click)="onDivClicked">
            <button (click)="onSave($event)">Save</button>
            </div>

            <h2>Event filtering</h2>
            <input (keyup.enter)="onKeyUp()">

            <h2>Template variables</h2>
            <input #email (keyup.enter)="onKeyUp2(email.value)">

            <h2>Two way binding</h2>
            <!--<input type="text" [(ngModel)]='email'>-->

            <h2>Pipes</h2>
            {{course.title | uppercase}}<br>
            {{course.students | number}}<br>
            {{course.rating | number:'1.2-2'}}<br>
            {{course.price | currency:'AUD ':true:'3.2-2'}}<br>
            {{course.releaseDate | date:'shortDate'}}<br>
            <h2>Custom Pipes</h2>
            {{course.text | summary}}
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

   // Two way binding
   email = 'angealain7@yahoo.fr';

  // Pipes
  course = {
    title: 'The complete Angular course',
    students: 30123,
    rating: 4.9745,
    price: 190.95,
    releaseDate: new Date(2020, 3, 3),
    text: 'Le Lorem Ipsum est simplemLe Lorem Ipsum est le faux texte standard de imprimerie depuis les années 1500, quand un imprimeur anonyme'

  }

  // custom pipes

  // Event binding
  onDivClicked() {
    console.log('div clicked');
  }

  onSave($event) {
    $event.stopPropagation();
    console.log('button was cliked', $event);
  }

  /* Event filtering
  onKeyUp(){
   console.log('ENETER was pressed');
  }
  */

  // Template variables
  onKeyUp2(email){
    console.log(email);
  }
   onKeyUp() {
    console.log(this.email);
  }
}
