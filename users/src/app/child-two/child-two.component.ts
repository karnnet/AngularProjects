import { Component, Input, OnInit } from '@angular/core';
import { User } from '../users-main/Users';
@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
@Input() selectedUserToChildTwo : User |null=null;
  constructor() { }

  ngOnInit(): void {
  }

}
