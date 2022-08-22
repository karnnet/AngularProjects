import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId:string='';
  userForm=new FormGroup({
    title:new FormControl(''),
    status:new FormControl(''),
  });
  //user:IUser|null=null;
  constructor(private route:ActivatedRoute,private userService:UserService,private router:Router ,private messageService:MessageService) { }

  ngOnInit(): void {
    this.userId=this.route.snapshot.params['id'];
this.userService.getUserById(this.userId).subscribe((data)=>{
  this.userForm.setValue({
    title:data.title,
    status:data.status,
  });
});
  }
  OnUpdateUser(){
  this.userService.updateUser(
    this.userForm.value as IUser,this.userId).subscribe((data)=>{
      this.messageService.setSuccessMessage('User updated successfully');
    this.router.navigate(['/users']);     
    });
  }

}
