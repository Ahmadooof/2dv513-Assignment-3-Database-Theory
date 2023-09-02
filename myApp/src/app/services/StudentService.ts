import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student/Student';
import { catchError, map, tap } from 'rxjs/operators';
import { ConfigService } from '../config.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class StudentService {
  constructor(private http: HttpClient, private ConfigService: ConfigService) {}
  
  private URI: string = `${this.ConfigService.getBaseUrl()}`; 
  private studentsURI: string = this.URI + '/student';
  private studentsURIDelet: string = this.URI + '/student';
  private innerJoinUrl = this.URI + '/student-course';
  private innerJoinAllTablesUrl = this.URI + '/student-course-grade';
  private groupByURl = this.URI + '/count-students';
  private applyViewURL = this.URI + '/create_view';
  private showViewURL = this.URI + '/show_view';
  private innerOrdered = this.URI + '/student-course-ordered';

  //   private url : string = 'https://hello-dot-schooldatabast.appspot.com/api/students';

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsURI);
  }

  /**
   * getStudentInnerJoin
   */
  public getStudentInnerJoin() {
    return this.http.get<Student[]>(this.innerJoinUrl);
  }

  public getInnerJoinOrdered() {
    return this.http.get<Student[]>(this.innerOrdered);
  }

  public getStudentInnerJoinAllTables() {
    return this.http.get<Student[]>(this.innerJoinAllTablesUrl);
  }

  public applyGroupBy() {
    return this.http.get<Student[]>(this.groupByURl);
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.URI}/student/${student.id}`, student);
  }

  public applyView() {
    return this.http.get<Student[]>(this.applyViewURL);
  }

  public showView() {
    return this.http.get<Student[]>(this.showViewURL);
  }

  public CreateStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsURI, student, httpOptions);
  }

  public getStudentById(id: number): Observable<Student> {
    const studentsURI = `${this.studentsURI}/${id}`;
    return this.http.get<Student>(studentsURI);
  }

  public UpdateStudent(student: Student, id: number): Observable<Student> {
    const studentsURI = `${this.studentsURI}/${id}`;
    return this.http.put<Student>(studentsURI, student, httpOptions);
  }

  public deleteStudent(student: Student): Observable<Student> {
    const studentsURI = `${this.studentsURIDelet}/${student.id}`;
    return this.http.delete<Student>(studentsURI, httpOptions);
  }
}
