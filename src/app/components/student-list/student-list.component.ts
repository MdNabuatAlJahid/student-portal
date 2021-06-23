import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert-service';
import { Student } from './../../models/student';
import { StudentService } from './../../services/student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  students: Student[];
  constructor(
    private studentService: StudentService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    //subscribe to the getStudent method observable
    this.studentService.getStudent().subscribe((data) => {
      this.students = data;
    });
  }

  onEdit(student: Student) {
    this.studentService.setStudentForm(student);
  }
  onDelete(student: Student) {
    this.studentService.deleteStudent(student);
    this.alertService.error('Student Deleted Successfully!');
  }
}
