import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import { MessageService } from 'src/app/services/message.service';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
userForm:FormGroup=new FormGroup({
  title:new FormControl('',[Validators.required]),
  status:new FormControl('active'),
})
  constructor(private userService:UserService,private router:Router,private messageService:MessageService) { }
   users:IUser[]=[];
  ngOnInit(): void {
    
  }
  onAddUser(){
    this.messageService.showLoading();
    let user=this.userForm.value;
    this.userService.addUser(user).subscribe((data)=>{
      this.messageService.setSuccessMessage('User added successfully');
      this.messageService.hideLoading();
      this.router.navigate(['/users']);
    });
  }

}
