import { Component } from '@angular/core';
import { AlertService } from '../../services/alert-service';
import { ApiService } from '../../services/api-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  loginForm: FormGroup;
  resetPassword = false;

  constructor(
    private apiService: ApiService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      code: new FormControl(this.resetPassword ? [Validators.required] : null),
      new_password: new FormControl(
        this.resetPassword
          ? [Validators.required, Validators.requiredTrue]
          : null
      ),
      confirm_password: new FormControl(
        this.resetPassword ? [Validators.required] : null
      ),
    });
  }

  onSubmit() {
    this.apiService
      .sendResetPasswordEmail(this.loginForm.value)
      .subscribe((data) => {
        this.resetPassword = true;
        this.alertService.success(
          'Please check your email: ' + this.loginForm.get('email')?.value
        );
      });
  }

  newPassword() {
    if (this.resetPassword) {
      this.apiService
        .resetPassword(this.loginForm.value)
        .subscribe((data) => console.log(data));
    }
    this.alertService.success('Password changed successfully');
    this.router.navigate(['login']);
  }
}
