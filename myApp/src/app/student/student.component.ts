import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { StudentService } from '../services/StudentService';
import { Student } from './Student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @ViewChild('closeModal', { static: false }) closeModal:
    | ElementRef
    | undefined;
    
  ngAfterViewInit() {
    // Check if deleteModal is defined before using it
    if (this.closeModal) {
      // Access the modal element
      const modalElement = this.closeModal.nativeElement;
    }
  }
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  visible = false;
  students: Student[] = [];

  ngOnInit() {
    this.getAllStudents();
    // this.applyInnerJoin();
  }

  public getAllStudents(): void {
    this.studentService.getStudents().subscribe((students) => {
      (this.students = students), (this.visible = false);
    });
  }

  public innerJoinOrdered(): void {
    this.visible = false;
    this.studentService.getInnerJoinOrdered().subscribe((students) => {
      console.log(students);
      (this.students = students), (this.visible = false);
    });
  }

  public applyInnerJoin(): void {
    this.visible = false;
    this.studentService.getStudentInnerJoin().subscribe((students) => {
      console.log(students);
      (this.students = students), (this.visible = false);
    });
  }

  public applyInnerJoinForAllTables(): void {
    this.visible = false;
    this.studentService.getStudentInnerJoinAllTables().subscribe((students) => {
      console.log(students);
      (this.students = students), (this.visible = false);
    });
  }

  public applyGroupBy(): void {
    this.visible = false;
    this.studentService.applyGroupBy().subscribe((students) => {
      console.log(students);
      (this.students = students), (this.visible = false);
    });
  }

  public applyView(): void {
    this.visible = false;
    this.studentService.applyView().subscribe((students) => {
      // console.log(students)
      (this.students = students), (this.visible = false);
    });
  }

  public showView(): void {
    this.visible = false;
    this.studentService.showView().subscribe((students) => {
      console.log(students);
      (this.students = students), (this.visible = false);
    });
  }

  onDeleteStudent(student: Student): void {
    console.log(student);
    this.studentService.deleteStudent(student).subscribe({
      next: (response) => {
        // Handle the successful response here
        console.log('Student deleted successfully:', response);
        // Close the modal programmatically
        if(this.closeModal)
        this.closeModal.nativeElement.click() //<-- here

        location.reload();
      },
      error: (err) => {
        // Error handling for deletion failure
        console.error('Error deleting student:', err);
        // Display an error message or take appropriate action
        this.router.navigate(['/students']);
      },
    });
  }
}
