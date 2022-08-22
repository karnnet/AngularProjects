import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { ICategory } from '../modals/ICategory';
@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
@Input() category!:ICategory;
@Output() tableSelected = new EventEmitter<boolean>();
showTable:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  backToTable(category:ICategory){
  this.tableSelected.emit(true);
  this.showTable=true;
  }
  }
