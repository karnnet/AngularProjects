import { Component, OnInit } from '@angular/core';
import { ICategory } from '../modals/ICategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
categories:ICategory[]=[
  {id:1,name:'abhinav',age:30}
  ];
selectedCategory:ICategory|null=null;
editCategory:ICategory|null=null;
showTable:boolean=true;
showForm:boolean=false;
viewShowCondition=false;
  constructor() { }

  ngOnInit(): void {
  }
  onAddCategory(){
    this.showForm=true;
    this.showTable=false;
      }
  onCategoryAdded(category:ICategory){
    category.id=this.categories.length+1;
    this.categories.push(category);
    this.showForm=false;
    this.showTable=true;
      }
  onCategorySelected(category:ICategory){
    this.selectedCategory=category;
    this.editCategory=null;
    this.showTable=false;
      
  }
  onCategoryEdited(category:ICategory){
this.editCategory=category;
this.selectedCategory=null;
this.showTable=false;
  }
  onUpdateCategory(category:ICategory){
this.categories=this.categories.map((cat)=>{
  if(category.id==cat.id){
    return category;
  }
  return cat;
});
this.showTable=false;
console.log(this.categories);
  }
  onCategoryDeleted(category:ICategory){
    let index= this.categories.indexOf(category);
    this.categories.splice(index,1);
      }
  //   onShowTable(){
  //   this.showTable=true;
  // }
  onclickShowView(boolValue:boolean)
  {
    this.viewShowCondition=boolValue;
    this.showTable=false;
  }
  showTableAfterView(boolValue:boolean)
  {
    this.showTable=boolValue;
    this.viewShowCondition=false;

  }

}
