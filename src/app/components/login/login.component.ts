import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert-service';

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private alertService: AlertService,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    const token = this.authService.authStudent(this.loginForm.value);
    if (token) {
      localStorage.setItem('token', token.email);
      this.alertService.success('login Successful!');
      this.router.navigate(['student']);
    } else {
      this.alertService.error('Check your email and password!');
    }
  }

  signup() {
    this.router.navigate(['signup']);
  }
}
