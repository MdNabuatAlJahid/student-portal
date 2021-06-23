import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  authStudent(student: any) {
    let studentArray = [];
    if (localStorage.getItem('Students')) {
      studentArray = JSON.parse(localStorage.getItem('Students') || '[]');
    }
    return studentArray.find(
      (data: { email: any; password: any }) =>
        data.email === student.email && data.password === student.password
    );
  }
}
