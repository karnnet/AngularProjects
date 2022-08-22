import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../modals/IUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {
@Input() user!:IUser;
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }
  onEditUser(user:IUser){
    this.userService.selectedUser=user;
    this.router.navigate(['/edituser']);
  }
  onDeleteuser(){
    this.userService.deleteUser(this.user);
  }

}
