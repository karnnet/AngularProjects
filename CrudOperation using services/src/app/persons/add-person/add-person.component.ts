import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { IPerson } from '../models/IPerson';
import { PersonComponentEnum } from '../models/person-component.enum';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  id:any='';
  name='';
  address='';
  constructor(private personService:PersonService) { }

  ngOnInit(): void {
  }
  onAddPerson(){
    let person={ 
      id:this.id,
      name:this.name,
      address:this.address,
    };
this.personService.addPerson(person);
this.personService.selectedComponentEvent.emit(PersonComponentEnum.persons);
console.log(person);
  }
  onBack(){
  this.personService.selectedComponentEvent.emit(PersonComponentEnum.persons);
  }
}
