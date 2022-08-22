import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProductsComponent } from "./products/products.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users/users.component";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardservice } from "./guards/AuthGuardservice";
import { AuthGuardChildservice } from "./guards/auth-guard-child.service";
import { DeactivateGuardService } from "./guards/deactivate-guard.service";
const applicationRoutes:Routes=[
    //{ path:'',component:HomeComponent},// no redirecion to home page
    { path:'',redirectTo:'home',pathMatch:"full"},//redirecting to home page
    { path:'home',component:HomeComponent},
    { path:'about',component:AboutComponent},
    { path:'user/:id/:name',component:UserComponent},
   
    { path:'contact',component:ContactComponent},
    { path:'products',component:ProductsComponent,canDeactivate:[DeactivateGuardService]},
    {path:'users',component:UsersComponent,
    canActivate:[AuthGuardservice],
    canActivateChild:[AuthGuardservice],
    children:[{path:':id/:name',component:UserComponent},{path:':id/:name/edit',component:EditUserComponent,canDeactivate:[DeactivateGuardService]}]},
    { path:'not-found',component:NotFoundComponent},
    { path:'**',redirectTo:'not-found'},//wild card route
  ];
@NgModule({
imports:[RouterModule.forRoot(applicationRoutes)],
exports:[RouterModule]
})

export class AppRoutingModule{

}