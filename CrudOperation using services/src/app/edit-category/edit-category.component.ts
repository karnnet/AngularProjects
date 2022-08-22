import { Component, OnInit } from '@angular/core';
import { IPerson } from '../persons/models/IPerson';
import { PersonComponentEnum } from '../persons/models/person-component.enum';
import { PersonService } from '../persons/services/person.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  id:any='';
  name='';
  address='';
  person:IPerson|null=null;
  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.person=this.personService.selectedPerson;
    if(this.person){
      this.id=this.person.id;
      this.name=this.person.name;
      this.address=this.person.address;
    }
  }
  onUpdatePerson(){
    let person={
    id:this.person?.id,
    name:this.name,
    address:this.address};
        this.personService.updateCategory(person);
  }
  onBack(){
    this.personService.selectedComponentEvent.emit(PersonComponentEnum.persons);
  }

}
