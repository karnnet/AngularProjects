import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    email: [''],
    password: [''],
  });
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,private router:Router,private messageService:MessageService) { }

  ngOnInit(): void {
  }
  onRegister() {
        const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    if (email && password) {
      this.authService.register(email, password).subscribe((data) => {
        this.authService.loggedInEvent.emit(true);
        this.messageService.setSuccessMessage('User Register Successfully');
        this.router.navigate(['/']);
      });
    }
  }

}
