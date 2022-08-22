import { EventEmitter, Injectable, Output } from "@angular/core";
import { IPerson } from "../models/IPerson";
import { PersonComponentEnum } from "../models/person-component.enum";

@Injectable({
    providedIn:"root",
})
export class PersonService{
    persons:IPerson[]=[
        {id:1,name:'ajay',address:"hyderabad" },];
        @Output() selectedComponentEvent=new EventEmitter<PersonComponentEnum>();
        selectedPerson:IPerson|null=null;
    constructor(){    }
    addPerson(person:IPerson){
        if(!person.id)
        person.id=this.persons.length+1;
        this.persons.push(person)
    }
    updateCategory(person:IPerson){
this.persons=this.persons.map((pers)=>{
    if(pers.id==person.id){
        return person;
    }
    return pers;
})
    }
    deletePerson(person:IPerson){
        let index=this.persons.indexOf(person);
        this.persons.splice(index,1);
    }
}