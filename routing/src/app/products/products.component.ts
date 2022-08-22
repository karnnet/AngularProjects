import { Component, OnInit } from '@angular/core';
import { IDeactivate } from '../guards/deactivate-guard.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,IDeactivate {

  constructor() { }

  ngOnInit(): void {
  }
  canExit(){
    if(confirm('are u sure want to exit')){
      return true;
    }
    return false;
  }

}
