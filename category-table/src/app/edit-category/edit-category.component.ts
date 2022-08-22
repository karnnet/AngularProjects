import { Component, EventEmitter, Input,OnChanges, Output } from '@angular/core';
import { ICategory } from '../modals/ICategory';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent  {
@Input() category!:ICategory;
@Output() categoryUpdated=new EventEmitter<ICategory>();
@Output() tableSelected = new EventEmitter<boolean>();
showTable:boolean=true;
id:any='';
name:string="";
age:any='';
    ngOnChanges(){
    this.id=this.category.id;
    this.name=this.category.name;
    this.age=this.category.age;
  }
  backToTable(category:ICategory){
    this.tableSelected.emit(true);
    this.showTable=true;
    }
  OnUpdateCategory(){
        let category:ICategory=  {
      id:this.id,
      name:this.name,
      age:this.age,
    };
    this.categoryUpdated.emit(category);

}}
