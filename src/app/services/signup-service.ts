import { Injectable } from '@angular/core';
import { User } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor() {}

  addStudent(student: any) {
    let newStudent = [];
    if (localStorage.getItem('Students')) {
      newStudent = JSON.parse(localStorage.getItem('Students') || '[]');
      newStudent = [student, ...newStudent];
    } else {
      newStudent = [student];
    }
    localStorage.setItem('Students', JSON.stringify(newStudent));
  }
}
