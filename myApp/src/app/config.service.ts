import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ConfigService {
  private baseUrl = 'https://school-backend.ahmadhome.com';  // http://localhost:4000

  getBaseUrl(): string {
    return this.baseUrl;
  }
  
}


// this should be injected in any service needs to call backend api