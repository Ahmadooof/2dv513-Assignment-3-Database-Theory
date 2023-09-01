import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  ngOnInit() {
  }

  constructor(private http: HttpClient) {}
  private URI: string = "http://localhost:4000"; // http://localhost:4000

  executeSqlFile(): void {
    // Make a POST request to the Express.js API endpoint
    this.http.post(`${this.URI}/execute-sql-file`, {}).subscribe(
      (response) => {
        console.log('SQL file executed successfully:', response);
        location.reload();

        // You can handle the success response here
      },
      (error) => {
        console.error('Error executing SQL file:', error);
        // You can handle the error response here
      }
    );
  }

 public searchForStudent() : void{
    
 }

}
