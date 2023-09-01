import { Component, OnInit } from '@angular/core';
import {Student} from '../Student';
import { StudentService } from '../../services/StudentService';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  constructor(private studentService : StudentService) { }

  ngOnInit() {
  }

//{name, email, land, city,postNumber} as Student
  create(name:String, email: String, land:String, city:String,postNumber:number) : void {
      this.studentService.CreateStudent({name, email, land, city,postNumber} as Student)
          .subscribe();
  }

}
