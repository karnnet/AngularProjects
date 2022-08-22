import { Component, OnInit } from '@angular/core';
import { iUser } from '../models/iUser';
import { ICategory } from '../models/ICategory';
@Component({
  selector: 'app-ng-for-component',
  templateUrl: './ng-for-component.component.html',
  styleUrls: ['./ng-for-component.component.css']
})
export class NgForComponentComponent  {
users:iUser[]=[
  {id:1,name:'Person 1'},
  {id:2, name:'Person 2'},
  {id:3, name:'Person 3'},
  {id:4, name:'Person 4'},
];
categories:ICategory[]=[
  {id:1,categoryName:'Category1'},
  {id:2,categoryName:'Category2'},
  {id:3,categoryName:'Category3'}
]
  constructor() { }
  
  onAddCategory(){
    
    this.categories.push({id:this.categories.length +1,
    categoryName:`category ${this.categories.length +1}`});

   // with this.categories table will rerender or looping again if we adding any data into tr
 
  //  this.categories=[
  //     {id:1,categoryName:'Category1'},
  //     {id:2,categoryName:'Category2'},
  //     {id:3,categoryName:'Category3'},
  //     {id:4,categoryName:'Category4'}
  //   ];
    }
    
  trackUser(index:number,category:ICategory){
     return category ? category.id:undefined;
  }
  showContent=false;
}
