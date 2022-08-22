import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
@Output() userAdded=new EventEmitter<void>();
  id:any='';
name='';
phone:number=0;
email='';
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    
  }
  onAdduser(){
let user={
  id:this.id,
  name:this.name,
  phone:this.phone,
  email:this.email,
};
this.userService.adduser(user);
this.userAdded.emit();
this.router.navigate(['/usertable']);
  }

}
                     