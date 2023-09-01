import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../../services/StudentService';
import { Route, ActivatedRoute } from '@angular/router';
import { Student } from '../Student';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  // @Input() student : Student | undefined;
  student?: Student;
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.getStudentById(+idParam);
    } else {
      // handle the case when idParam is null
      // for example, redirect to an error page or a default page
    }
  }

  getStudentById(id: number): void {
    this.studentService
      .getStudentById(id)
      .subscribe((student) => (this.student = student));
  }

  updateStudent(student: Student): void {
    if (student) {
      this.studentService.updateStudent(student).subscribe((updatedStudent) => {
        this.student = updatedStudent;
      });
    }
  }
}
