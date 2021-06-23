import { AlertService } from './services/alert-service';
import { ApiService } from './services/api-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http-service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SignupService } from './services/signup-service';
import { AuthService } from './services/auth.service';
import { StudentComponent } from './components/student/student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { MatListModule } from '@angular/material/list';
import { StudentService } from './services/student.service';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavBarComponent,
    StudentComponent,
    StudentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatListModule,
    MatTableModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
  ],
  providers: [
    HttpService,
    ApiService,
    AlertService,
    SignupService,
    AuthService,
    StudentService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
