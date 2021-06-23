import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert-service';
import { Student } from './../../models/student';
import { StudentService } from './../../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  studentForm: FormGroup;
  name: string;
  matriculation: number;
  subject: string;
  isNewStudent: boolean = true;

  constructor(
    private studentService: StudentService,
    private alertService: AlertService
  ) {
    this.studentForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      matriculation: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    //subscribe to the selectedStudent observable
    this.studentService.selectedStudent.subscribe((data) => {
      if (data.name !== '') {
        this.isNewStudent = false;
        this.name = data.name;
        this.matriculation = data.matriculation;
        this.subject = data.subject;
      }
    });
  }

  onSubmit() {
    //Check if it is a new student
    if (this.isNewStudent) {
      //Creat new student
      const newStudent = {
        name: this.name,
        matriculation: this.matriculation,
        subject: this.subject,
      };
      //Add student
      this.studentService.addStudent(newStudent);
      this.studentForm.reset();
      this.alertService.success('Student Created Successfully!');
    } else {
      //Student to be updated
      const updateStudent = {
        name: this.name,
        matriculation: this.matriculation,
        subject: this.subject,
      };
      //Update student
      this.studentService.updateStudent(updateStudent);
      this.studentForm.reset();
      this.alertService.success('Student Edited Successfully!');
    }
  }
}
