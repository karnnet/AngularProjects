import { Component, Input, OnInit } from '@angular/core';
import { IPerson } from '../persons/models/IPerson';
import { PersonComponentEnum } from '../persons/models/person-component.enum';
import { PersonService } from '../persons/services/person.service';

@Component({
  selector: 'app-single-person',
  templateUrl: './single-person.component.html',
  styleUrls: ['./single-person.component.css']
})
export class SinglePersonComponent implements OnInit {
@Input() person!:IPerson; 
  constructor(private personService:PersonService) { }

  ngOnInit(): void {
  }
  onViewPerson(){
    this.personService.selectedPerson=this.person;
    this.personService.selectedComponentEvent.emit(PersonComponentEnum.viewPerson);
  }
  onEditPerson(){
    this.personService.selectedPerson=this.person;
    this.personService.selectedComponentEvent.emit(PersonComponentEnum.editPerson);
  }
  onDeletePerson(){
    this.personService.deletePerson(this.person);
    this.personService.selectedComponentEvent.emit(PersonComponentEnum.persons);
             }
}
