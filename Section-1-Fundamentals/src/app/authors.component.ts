import { AuthorsServices } from './authors.service';
import { Component } from '@angular/core';


@Component({
  selector: 'authors',
  template: `<h2>{{authorList}}</h2>
            <ul>
              <li *ngFor='let author of authors'>{{ author }}</li>
            </ul>
            `
})

export class AuthorsComponent {
  authorList = "Liste des auteurs";
  authors;

  constructor(service: AuthorsServices){
    this.authors = service.getAuthors();
  }
}
