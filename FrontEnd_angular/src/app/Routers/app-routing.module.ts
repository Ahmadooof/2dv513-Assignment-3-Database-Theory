import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from '../student/student.component';
import { HomeComponent } from '../home/home.component';
import { CreateStudentComponent } from '../student/create-student/create-student.component';
import { EditStudentComponent } from '../student/edit-student/edit-student.component';


const routes : Routes = [
  {path: 'students', component: StudentComponent},
  {path : ' ', component: HomeComponent},
  {path : 'students/create', component: CreateStudentComponent},
  {path : 'students/:id', component:EditStudentComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports : [RouterModule]
})


export class AppRoutingModule { }
