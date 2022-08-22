import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { delay, Observable, tap } from "rxjs";
import { IUserDetails } from "src/app/models/IUserDetails";


@Injectable({
    providedIn:'root'
})
export class AuthService{
userDetails:IUserDetails|null=null;
apiKey='AIzaSyBsNsfC4H6isFXQ16Duoazp6m8zistblFk';
loggedInEvent=new EventEmitter<boolean>();
  //getUserDetailsFromLocalStorage: any;

constructor(private http:HttpClient,private router:Router){
}

login(email:string,password:string):Observable<IUserDetails>{
 return this.http.post<IUserDetails>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
 {email,password,returnSecureToken:true}).pipe(
    delay(1000),
    tap((data)=>{
    this.userDetails=data;
    this.saveDataInLocalStorage();
    //this.autoLogout(100000);
 })
 );
}
    
register(email:string,password:string){
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
    {email,password,returnSecureToken:true});
   }

saveDataInLocalStorage(){
    let userDetailsJSON=JSON.stringify(this.userDetails);
    localStorage.setItem('userDetails',userDetailsJSON);
   }

   getUserDetailsFromLocalStorage(){
    let userDetailsJSON=localStorage.getItem('userDetails');
    if(userDetailsJSON){
        this.userDetails=JSON.parse(userDetailsJSON);
        this.loggedInEvent.emit(true);
    }
   }

   logout(){
    localStorage.removeItem('userDetails');
    this.userDetails=null;
    this.loggedInEvent.emit(false);
   }


   autoLogout(expirationDate:number){
    console.log(expirationDate);
setTimeout(()=>{
this.logout();
},expirationDate);
this.router.navigate(['/login']);
}
}
