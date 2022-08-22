import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../modals/IUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  users!:IUser[];
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.users=this.userService.users;
  }
  onAddUser(){
    this.router.navigate(['/adduser']);
  }

}

