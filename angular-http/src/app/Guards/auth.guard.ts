import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../Auth/components/services/auth.service";

@Injectable({
    providedIn:'root',
})
export class AuthGuard implements CanActivate{
    
    constructor(private authService:AuthService,private router:Router){ }
    
    canActivate(
        route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot):
          boolean 
          | UrlTree 
          | Observable<boolean 
          | UrlTree> 
          | Promise<boolean 
          | UrlTree> {
        let userDetails=this.authService.userDetails;
        if(userDetails){
            return true;
        }
        return this.router.navigate(['/login']);
        
    }
}