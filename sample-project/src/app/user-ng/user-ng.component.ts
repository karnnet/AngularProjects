import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-ng',
  templateUrl: './user-ng.component.html',
  styleUrls: ['./user-ng.component.css']
})
export class UserNgComponent  {
boxBackgroundColor="black";
boxTextColor="white";
boxMargin='5px 80px';
boxTextAlign="center";
buttonClass="btn btn-primary";
ngTextColor="black";
leftMargin='80px';
  constructor() { }
  OnButtonClick(){
    this.boxBackgroundColor='green';
    this.boxTextColor='black';
  }
  showContent=true;

  isUserCreated=false;
  isCreatedUser=false;
  onCreateUser(){
    this.isUserCreated=true;
  }
  onUserCreate(){
    this.isCreatedUser=true;
  }


 

}
