import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './Users/components/users/users.component';
import { AdduserComponent } from './Users/components/adduser/adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './Users/components/edit-user/edit-user.component';
import { AddPostFormComponent } from './add-post-form/add-post-form.component';
import { LoginComponent } from './Auth/components/login/login.component';
import { RegisterComponent } from './Auth/components/register/register.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { FilterPostPipe } from './Pipes/filter-post.pipe';
import { LoaderComponent } from './loader/loader.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { EditPostComponent } from './edit-post/edit-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    HeaderComponent,
    UsersComponent,
    AdduserComponent,
    EditUserComponent,
    AddPostFormComponent,
    LoginComponent,
    RegisterComponent,
    FilterPipe,
    FilterPostPipe,
    LoaderComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
