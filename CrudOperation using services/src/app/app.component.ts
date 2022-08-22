import { Component, OnInit } from '@angular/core';
import { PersonComponentEnum } from './persons/models/person-component.enum';
import { PersonService } from './persons/services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CrudOperation';
selectedComponent=PersonComponentEnum.persons;
constructor(private personService:PersonService){

}
ngOnInit(){
this.personService.selectedComponentEvent.subscribe((data)=>{
this.selectedComponent=data;
});
}
onAddPerson(){
this.selectedComponent=PersonComponentEnum.addPerson;
}

}
