import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  ngOnInit() {}

  constructor(private http: HttpClient, private ConfigService: ConfigService) {}
  private URI: string = `${this.ConfigService.getBaseUrl()}`;

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

  public searchForStudent(): void {}
}
