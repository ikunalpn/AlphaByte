import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http:HttpClient,) { }

  // private headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

  public login(username: string, password: string): Observable<HttpResponse<string>> {
    return this.http.get<any>(`${baseUrl}/login/${username}/${password}`, { observe: 'response' });
  }

  public signup(data:any){

    return this.http.post(`${baseUrl}/signup`,data);
  }
  savePatientDetails(formData: FormData): Observable<any> {
    return this.http.post(`${baseUrl}/details`, formData );
  }
  getPatientDetails(): Observable<PatientDetails[]> {
    return this.http.get<PatientDetails[]>(`${baseUrl}/details`);
  }
}
// patient-details.model.ts
export interface PatientDetails {
  patientId: number;
  patientName: string;
  weight: number;
  height: number;
  bloodGroup: string;
  allergies: string[];
  chronicIllness: string[];
  mediclaim: string;
  labReports: string;
  prescription: string;
  vaccination: string;
  vaccDetails: string[];
  bp: number;
  sugar: number;
  bodyTemp: number;
  pulseRate: number;
  spo2: number;
}
