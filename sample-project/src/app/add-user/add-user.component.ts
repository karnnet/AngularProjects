import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
userName:string="";
  constructor() { }

  ngOnInit(): void {
  }
userNameUpdate(event:Event){
this.userName=((event.target as HTMLInputElement).value);
}
}
