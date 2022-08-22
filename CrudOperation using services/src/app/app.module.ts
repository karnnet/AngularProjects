import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { SinglePersonComponent } from './single-person/single-person.component';
import { AddPersonComponent } from './persons/add-person/add-person.component';
import { FormsModule } from '@angular/forms';
import { ViewPersonComponent } from './view-person/view-person.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    SinglePersonComponent,
    AddPersonComponent,
    ViewPersonComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
