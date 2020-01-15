import { Component, OnInit, } from '@angular/core';
import { StudentService } from '../services/StudentService';
import { Student } from './Student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService,private route : ActivatedRoute) { }
   visible=false;
   students : Student[] = [];

  ngOnInit() {
    this.getAllStudents();
    // this.applyInnerJoin();
  }

  public getAllStudents(): void {
    this.studentService.getStudents().subscribe(students => {
    this.students = students, this.visible=false});
  }

  public innerJoinOrdered() :void{
    this.visible = false;
    this.studentService.getInnerJoinOrdered().subscribe(students => {
      console.log(students)
      this.students = students, this.visible = false
    })
  }

  public applyInnerJoin(): void{
    this.visible = false;
    this.studentService.getStudentInnerJoin().subscribe(students => {
      console.log(students)
      this.students = students, this.visible = false
    })
  }

  public applyInnerJoinForAllTables():void{
    this.visible = false;
    this.studentService.getStudentInnerJoinAllTables().subscribe(students => {
      console.log(students)
      this.students = students, this.visible = false
    })
  }

  public applyGroupBy():void{
    this.visible = false;
    this.studentService.applyGroupBy().subscribe(students => {
      console.log(students)
      this.students = students, this.visible = false
    })
  }

  public applyView():void{
    this.visible = false;
    this.studentService.applyView().subscribe(students => {
      console.log(students)
      this.students = students, this.visible = false
    })
  }

  public showView():void{
    this.visible = false;
    this.studentService.showView().subscribe(students => {
      console.log(students)
      this.students = students, this.visible = false
    })
  }

  
  public deleteStudent(student:Student): void{
    this.studentService.deleteStudent(student).subscribe();
  }

}
