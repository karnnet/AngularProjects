import { Component, OnInit } from '@angular/core';
import { IUser } from '../modals/IUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
//users!:IUser[];
  constructor() { }

  ngOnInit(): void {
    //this.users=this.userService.users;
  }

}
