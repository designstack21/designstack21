import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoDesignService {

  constructor(private http: HttpClient) { }

  progressiveSave(logoTitle) {
    console.log(' logoTitle ', logoTitle);
    // return this.http.post(logoTitle, { 'logoTitle': logoTitle });
  }
}
