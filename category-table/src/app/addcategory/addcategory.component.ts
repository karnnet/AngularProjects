import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICategory } from '../modals/ICategory';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
id:any='';
name:string="";
age:any='';
@Output() categoryAdded = new EventEmitter<ICategory>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddCategory(){
    let category:ICategory=  {
      id:this.id,
      name:this.name,
      age:this.age,
    }
    this.categoryAdded.emit(category);
  }

}
