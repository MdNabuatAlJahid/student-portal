import { SignupService } from '../../services/signup-service';
import { AlertService } from '../../services/alert-service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/student';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  student = {};
  signupForm: FormGroup;
  constructor(
    private alertService: AlertService,
    private router: Router,
    private signupService: SignupService
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(8),
      ]),
      confirm_password: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    this.student = Object.assign(this.student, this.signupForm.value);
    this.signupService.addStudent(this.student);
    this.alertService.success('Signup Successful');
    this.router.navigate(['login']);
  }

  login() {
    this.router.navigate(['login']);
  }
}
