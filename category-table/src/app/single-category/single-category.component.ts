import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory } from '../modals/ICategory';

@Component({
  selector: '[app-single-category]',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
@Input() category!:ICategory;
@Output() categorySelected = new EventEmitter<ICategory>();
@Output() categoryEdited = new EventEmitter<ICategory>();
@Output() categoryDeleted = new EventEmitter<ICategory>();
@Output() showView=new EventEmitter<boolean>();
//hideTable=true;

  constructor() { }

  ngOnInit(): void {
  }
  onCategorySelect(category:ICategory){
this.categorySelected.emit(category);
this.showView.emit(true);
//this.hideTable=false;

  }
  onEditCategory(category:ICategory){
   this.categoryEdited.emit(category);
   this.showView.emit(true);
  }
  onDeleteCategory(category:ICategory){
    var result = confirm("Want to delete?");
  if (result==true) {
   return  this.categoryDeleted.emit(category);
  } else {
   return false;
  }
   
  }

}
