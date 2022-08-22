import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SampleComponent } from './sample/sample.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component.spec';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddUserTwoWayComponent } from './add-user-two-way/add-user-two-way.component';
import { UserNgComponent } from './user-ng/user-ng.component';
import { NgForComponentComponent } from './ng-for-component/ng-for-component.component';
import { InputComponentComponent } from './input-component/input-component.component';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SecondComponent,
    ThirdComponent,
    FooterComponent,
    TestComponent,
    AddUserComponent,
    AddUserTwoWayComponent,
    UserNgComponent,
    NgForComponentComponent,
    InputComponentComponent
  ],
  imports: [BrowserModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
