import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../../services/StudentService';
import { Route, ActivatedRoute } from '@angular/router';
import { Student } from '../Student';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  @Input() student : Student;

  constructor(
    private studentService: StudentService,
    private route : ActivatedRoute,
    private location : Location,
  ) { }

  ngOnInit() {
    this.getStudent();
  }

  getStudent():void {
     // we are getting the id from the link to send it to the RestAPI getStudentById
     // to show the details for the specific student in DB.
    const id = +this.route.snapshot.paramMap.get('id'); 

    this.studentService.getStudentById(id).subscribe(student => this.student = student);
  }

  public UpdateStudent(name:string, email:string,land:string,city:string,postNumber:number): void{
    const id = +this.route.snapshot.paramMap.get('id');
    
    // this.studentService.UpdateStudent({id,name,email,land,city,postNumber} as Student, id).subscribe();
  }

}
