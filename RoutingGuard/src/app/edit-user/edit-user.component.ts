import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../modals/IUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id:any='';
  name='';
  phone:any='';
  email='';
  user:IUser|null=null;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.user=this.userService.selectedUser;
    if(this.user){
      this.id=this.user.id;
      this.name=this.user.name;
      this.phone=this.user.phone;
      this.email=this.user.email;
  }}
  onUpdateUser(){
    let user={
      id:this.user?.id,
      name:this.name,
      phone:this.phone,
      email:this.email};
      this.userService.updateUser(user);
      this.router.navigate(['/usertable']);
    };
    canExit(){
      if(confirm('Are you sure you want to exit')){
        return true;
      }
      return false;
    }
  }   
  
// function onUpdateUser() {
//   throw new Error('Function not implemented.');
// }



