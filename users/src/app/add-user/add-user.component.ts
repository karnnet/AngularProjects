import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from '../modals/IUser';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
id:number=0;
name:string="";
age:number=0;
@Output() userAdded=new EventEmitter<IUser>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddUser(){
    let user:IUser={
      id:this.id,
      name:this.name,
      age:this.age,
    };
    this.userAdded.emit(user);
  }

}
