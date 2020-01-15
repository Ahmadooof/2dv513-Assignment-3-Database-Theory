import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/StudentService';
import { Observable } from 'rxjs/Observable';
import { Student } from '../student/Student';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
 // studentsResult : Observable<Student>
 // private searchQuery : new Subject<String>(); 

  constructor(private studentService : StudentService) { }

  ngOnInit() {
  }

//  public searchForStudent() : void{
    
 // }

}
