import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http:HttpClient,) { }

  // private headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

  public login(data:any){

    return this.http.post(`${baseUrl}/login`,data);
  }

  public signup(data:any){

    return this.http.post(`${baseUrl}/signup`,data);
  }
  savePatientDetails(formData: FormData): Observable<any> {
    return this.http.post(`${baseUrl}/details`, formData );
  }
}
