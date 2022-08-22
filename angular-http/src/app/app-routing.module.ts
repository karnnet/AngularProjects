import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostFormComponent } from './add-post-form/add-post-form.component';
import { LoginComponent } from './Auth/components/login/login.component';
import { RegisterComponent } from './Auth/components/register/register.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AuthGuard } from './Guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { AdduserComponent } from './Users/components/adduser/adduser.component';
import { EditUserComponent } from './Users/components/edit-user/edit-user.component';
import { UsersComponent } from './Users/components/users/users.component';

const routes: Routes = [
  {  path:'',component:HomeComponent},
  {  path:'posts',canActivate:[AuthGuard],component:PostsComponent,
  children:[
    {path:'addPost',component:AddPostFormComponent}]},
 {  path:'post/:title/edit',component:EditPostComponent},
  {  path:'users',component:UsersComponent,canActivate:[AuthGuard]},
  {  path:'user/add',component:AdduserComponent,canActivate:[AuthGuard]},
  {  path:'user/:id/edit',component:EditUserComponent,canActivate:[AuthGuard]},
  {  path:'login',component:LoginComponent},
  {  path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
