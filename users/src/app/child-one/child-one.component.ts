import { Component, OnInit,EventEmitter, Input } from '@angular/core';
import { User } from '../users-main/Users';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent  {
   @Input() selectedUserToChildOne : User | null = null;
  constructor() { } 
}
