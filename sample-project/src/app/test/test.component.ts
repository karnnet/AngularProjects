import { style } from '@angular/animations';
import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [`
  div{color:black;
  font-size:35px;
  font-weight:bold;
  }`]
})
export class TestComponent  {
name="navneet works on Angular";
NumberArray=[1,2,3,4];
buttonDisabled=true;

  constructor() { }
//  setInterval(() => {
//   this.buttonDisabled=!this.buttonDisabled;
//  }, 3000);
onButttonClick(){
  setInterval(() => {
      this.buttonDisabled=!this.buttonDisabled;
     },2000);
}
mouseEnter(){
  console.log("You have enter mouse");
}
mouseLeave(){
  console.log("You have leave mouse");
}
mouseDown(){
  console.log("The mouse button is held down.");
}
mouseUp(){
  console.log("You released the mouse button.");
}
// keyDown(){
//   console.log("You pressed the key.");
// }
}
