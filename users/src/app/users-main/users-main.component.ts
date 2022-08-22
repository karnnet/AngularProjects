import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../modals/IUser';
import { User } from './Users';

@Component({
  selector: 'app-users-main',
  templateUrl: './users-main.component.html',
  styleUrls: ['./users-main.component.css']
})
export class UsersMainComponent {
users:User[]|null=null;

selectedUser:User|null=null;
selectedUserForEdit: User|null = null;

  constructor() { 
    this.users=[
      {id:1,name:'ajay',age:30},
      {id:2,name:'sanjay',age:37},
      {id:3,name:'varun',age:37},
    ];
console.log(this.users);

  }
  trackUser(index:number,user:User){
  return user? user.id:undefined;
  }
  onUserSelect(event:User){
    this.selectedUser=event;
    this.selectedUserForEdit=null;
  }
  onUserEditSelect(event:User){
    this.selectedUserForEdit=event;
    this.selectedUser=null;
  }
  onUserAdd(event:IUser){
    this.users.id=this.users.length+1;
    this.users.push(user);
  }
  }
