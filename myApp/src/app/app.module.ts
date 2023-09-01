import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from './services/StudentService';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './Routers/app-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HomeComponent,
    CreateStudentComponent,
    EditStudentComponent,
    NavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
