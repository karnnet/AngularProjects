import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { User } from '../users-main/Users';
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
  @Input() user!:User;
  @Output() userSelected= new EventEmitter<User>();
  @Output() userSelectedForEdit= new EventEmitter<User>();
  constructor() { }

  onUserSelect(){
this.userSelected.emit(this.user);
  }
  // onUserviewSelect(){
  //   this.onUserviewSelect.emit(this.user)
  // }
  onUserEditSelect(){
    this.userSelectedForEdit.emit(this.user);
  }
}
