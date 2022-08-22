import { Component, OnInit } from '@angular/core';
import { IPerson } from '../persons/models/IPerson';
import { PersonComponentEnum } from '../persons/models/person-component.enum';
import { PersonService } from '../persons/services/person.service';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.css']
})
export class ViewPersonComponent implements OnInit {
person!:IPerson;
  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    if(this.personService.selectedPerson){
    this.person=this.personService.selectedPerson;
  }}
  onBack(){
    this.personService.selectedComponentEvent.emit(PersonComponentEnum.persons);
  }

}
