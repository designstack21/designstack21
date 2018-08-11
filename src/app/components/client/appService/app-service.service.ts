import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppSerceService {
    private servicesUrl = './api/service';

    constructor(private http: HttpClient) { }
    getServices() {
        return this.http.get(this.servicesUrl);
    }
}
