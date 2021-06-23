import { AlertService } from './alert-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class HttpService {
  private baseURL = 'http://localhost:5000/api';
  constructor(private http: HttpClient, private alertService: AlertService) {}

  get(url: string, paramData?: any): Observable<any> {
    const data = { params: paramData };
    return this.http.get(this.baseURL + url, data);
  }

  post(url: string, body: any): Observable<any> {
    return this.http.post(this.baseURL + url, body);
  }

  patch(url: string, body: any) {
    return this.http.patch(this.baseURL + url, body);
  }

  private errorHandler(response: any) {
    const error = response.error;
    const message = response.message;
    const status = response.status;

    this.alertService.error(message);
    return throwError({ message, error });
  }
}
