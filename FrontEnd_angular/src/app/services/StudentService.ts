import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Student } from "../student/Student";
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
@Injectable()
export class StudentService {
    constructor(private http:HttpClient) {}
    private url : string = 'http://localhost:3000/student';
    private innerJoinUrl = 'http://localhost:3000/student-course'
    private innerJoinAllTablesUrl = 'http://localhost:3000/student-course-grade'
    private groupByURl = 'http://localhost:3000/count-students'
    private applyViewURL = 'http://localhost:3000/create_view'
    private showViewURL = 'http://localhost:3000/show_view'
    private innerOrdered = 'http://localhost:3000/student-course-ordered'
    
 //   private url : string = 'https://hello-dot-schooldatabast.appspot.com/api/students';

    public getStudents() : Observable<Student[]> {
        return this.http.get<Student[]>(this.url);
    }

    /**
     * getStudentInnerJoin
     */
    public getStudentInnerJoin() {
        return this.http.get<Student[]>(this.innerJoinUrl);
    }

    public getInnerJoinOrdered(){
        return this.http.get<Student[]>(this.innerOrdered);
    }

    public getStudentInnerJoinAllTables(){
        return this.http.get<Student[]>(this.innerJoinAllTablesUrl);
    }

    public applyGroupBy(){
        return this.http.get<Student[]>(this.groupByURl);
    }

    public applyView(){
        return this.http.get<Student[]>(this.applyViewURL);
    }

    public showView(){
        return this.http.get<Student[]>(this.showViewURL);
    }

    public CreateStudent(student : Student): Observable<Student> {
        return this.http.post<Student>(this.url,student,httpOptions);
    }

    public getStudentById(id : number): Observable<Student> {
        const url = `${this.url}/${id}`;
        return this.http.get<Student>(url);
    }

    public UpdateStudent(student :Student,id:number): Observable<Student>{
        const url = `${this.url}/${id}`;
        return this.http.put<Student>(url,student,httpOptions);
    }

    public deleteStudent(student:Student): Observable<Student>{
        const url = `${this.url}/${student.id}`;
        return this.http.delete<Student>(url,httpOptions);
    }
}