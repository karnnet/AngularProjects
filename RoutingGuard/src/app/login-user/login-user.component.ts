import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
@ViewChild('form') signUpForm!:NgForm;
  constructor(private router:Router,private authService:AuthService) { }
  userName!:string;
  userEmail!:string;
  ngOnInit(): void {
    
  }
  onAdduser(){
    this.router.navigate(['/usertable']);
    
  }
  onSubmitClick(){
  console.log(this.signUpForm.value);
  this.router.navigate(['/usertable']);
  if(this.signUpForm.valid){
  console.log(this.signUpForm);
}
else{
  console.log('form is not valid');
}
  }
  onLogin(){
this.authService.login(this.userName,this.userEmail);
this.router.navigate(['/usertable']);
  }
  

}
