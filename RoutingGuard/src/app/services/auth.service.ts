import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root',
})
export class AuthService{
    userName:string="navneet";
    userEmail:string="abc@gmail.com";
isLoggedIn=false;
    constructor(){}
login(name:string,email:string){
    if(name==this.userName && email==this.userEmail){
    this.isLoggedIn=true;
    }else{
        this.isLoggedIn=false;
    }
    }
logout(){
    this.isLoggedIn=false;
}
isAuthenticated(){
    return this.isLoggedIn;
}
}
