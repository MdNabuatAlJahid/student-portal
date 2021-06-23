import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: Student[];

  private studentSource = new BehaviorSubject<Student>({
    name: '',
    matriculation: 0,
    subject: '',
  });

  selectedStudent = this.studentSource.asObservable();

  constructor() {
    this.students = [
      {
        name: 'Stephan Ivo',
        matriculation: 123456789,
        subject: 'Software Developer',
      },
      {
        name: 'Oliver Fornoff',
        matriculation: 123456789,
        subject: 'Manager System Test',
      },
      {
        name: 'Joerg Klaus Mueller',
        matriculation: 123456789,
        subject: 'Program Manager',
      },
    ];
  }

  getStudent(): Observable<Student[]> {
    if (localStorage.getItem('Student') === null) {
      this.students = [];
    } else {
      this.students = JSON.parse(localStorage.getItem('Student') || '{}');
    }
    return of(this.students);
  }

  setStudentForm(student: Student) {
    this.studentSource.next(student);
  }

  addStudent(student: Student) {
    this.students.unshift(student);
    // Add student to local storage
    localStorage.setItem('Student', JSON.stringify(this.students));
  }

  updateStudent(student: Student) {
    this.students.forEach((currentStudent, index) => {
      if (student.name == currentStudent.name) {
        this.students.splice(index, 1);
      }
    });
    this.students.unshift(student);
    // Update student to local storage
    localStorage.setItem('Student', JSON.stringify(this.students));
  }

  deleteStudent(student: Student) {
    this.students.forEach((currentStudent, index) => {
      if (student.name == currentStudent.name) {
        this.students.splice(index, 1);
      }
    });
    // Delete student to local storage
    localStorage.setItem('Student', JSON.stringify(this.students));
  }
}
