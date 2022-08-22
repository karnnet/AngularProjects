import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EditUserComponent } from "../edit-user/edit-user.component";
@Injectable({
    providedIn:'root',
})
export class DeActivateGuardService implements CanDeactivate<EditUserComponent>{
    canDeactivate(
        component: EditUserComponent,
         currentRoute: ActivatedRouteSnapshot, 
         currentState: RouterStateSnapshot,
         nextState?: RouterStateSnapshot | undefined):
          boolean|Observable<boolean>|Promise<boolean> {
       return component.canExit();
    }

}