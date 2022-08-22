import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../Auth/components/services/auth.service';
@Injectable({
    providedIn:'root'
})
export class AuthInterceptorService implements HttpInterceptor{
    constructor(public auth:AuthService){}
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler){
        //     console.log('Request Interceptor');
        //    let modifiedRequest=req.clone({
        //     headers:req.headers.append('auth','abc'),
        //     params:req.params.append('hi','helloworld'),
        //    })
            
        //     return next.handle(modifiedRequest).pipe(tap(event=>{
        //         console.log(event);
        //         console.log('Response from Interceptor');
        //         if(event.type===HttpEventType.Response){
        //             console.log(event.body);
        //         }
        //     }));
        let url = req.url;
  if (this.auth.userDetails?.idToken) {
    url = url+'?auth='+this.auth.userDetails?.idToken
  }
  let modifiedrequest = req.clone({
    url: url
})
return next.handle(modifiedrequest)
    }
}