import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { UsertableComponent } from './usertable/usertable.component';
import { UsersComponent } from './users/users.component';
import { SingleuserComponent } from './singleuser/singleuser.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { DeActivateGuardService } from './guards/deactivate-guard.service';



const appRoute:Routes=[
  //{path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'loginuser',component:LoginUserComponent},
  {path:'user',component:UserComponent},
  {path:'usertable',component:UsertableComponent,canActivate:[AuthGuardService]},
  {path:'adduser',component:AddUserComponent},
  {path:'edituser',component:EditUserComponent,canDeactivate:[DeActivateGuardService]},
]
@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    HomeComponent,
    ContactComponent,
    NavigationComponent,
    UsertableComponent,
    UsersComponent,
    SingleuserComponent,
    UserComponent,
    AddUserComponent,
    EditUserComponent,
        
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
