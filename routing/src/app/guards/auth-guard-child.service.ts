import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
@Injectable({
    providedIn:'root'
})
export class AuthGuardChildservice implements CanActivateChild{
constructor(private authService:AuthService,private router:Router){

}
canActivateChild(
    childRoute: ActivatedRouteSnapshot,
     state: RouterStateSnapshot):
     boolean|Observable<boolean>|Promise<boolean>{
    const isLoggedIn=this.authService.isAuthenticated();
if(isLoggedIn){
    return true;
}
else {
return this.router.navigate(['/']);
}
};
}