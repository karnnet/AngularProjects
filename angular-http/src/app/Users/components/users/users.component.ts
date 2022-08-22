import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  filteredString:any='';
  users:IUser[]=[];
  constructor(private userService:UserService,private router:Router) {
    this.users=[]
   }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: IUser[])=>{
      this.users=users;
    });
  }
  deleteCategory(id:any){
    this.userService.deleteUser(id).subscribe((data)=>{
      this.userService.getUsers().subscribe((users: IUser[])=>{
        this.users=users;
      });
    });
    console.log(id)
  }
}
