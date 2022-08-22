import { Component, OnInit } from '@angular/core';
import { IPerson } from './models/IPerson';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
persons!:IPerson[];
  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.persons=this.personService.persons;
  }

}
