import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoDesignService {

  private logoFormUrl = '/logoFormSave';

  constructor(private http: HttpClient) { }

  logoFormSave(form) {
    console.log('saving logo form...', form);
    return this.http.post(this.logoFormUrl, form);
  }
}
