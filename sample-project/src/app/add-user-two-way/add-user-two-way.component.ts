import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user-two-way',
  templateUrl: './add-user-two-way.component.html',
  styleUrls: ['./add-user-two-way.component.css']
})
export class AddUserTwoWayComponent{
userName:string='';
imgUrl="https://service.secureoffersites.com/images/GetLibraryImage?fileNameOrId=87318&Width=0&Height=0&quality=85";
constructor() { }
classNames="btn btn-sm btn-primary";
isBUttonSmall=false;
isBUttonPrimary=false;
onButtonClick(){
  this.isBUttonSmall=true;
  this.isBUttonPrimary=true;
}

}
