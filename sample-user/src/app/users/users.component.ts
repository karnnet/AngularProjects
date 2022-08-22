import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
users:User[] |null =null;
selectedUser:User |null=null;
height=40;

  constructor() { 
this.users=[
  {id:1,name:'Karan',address:'Delhi',occupation:'Accountant'},
  {id:2,name:'Navneet',address:'Mumbai',occupation:'Engineer'},
  {id:3,name:'Ajay',address:'Bengaluru',occupation:'Software'},
  {id:4,name:'Ritesh',address:'Pune',occupation:'Assistant'},
  {id:5,name:'Aryan',address:'Hyderabad',occupation:'clerk'},
  {id:6,name:'Ritesh',address:'Pune'},
];
console.log(this.users);
this.selectedUser=this.users[2];
 }
 textcolor='red';
 trackUser(index:number,user: User){
  return user? user.id:undefined;
 }
 onUserSelect(event:User){
  this.selectedUser=event;
 }
}
