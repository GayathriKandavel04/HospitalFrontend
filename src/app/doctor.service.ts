import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL="http://localhost:8080/doctors";
  constructor( private httpClient:HttpClient) { }

  getDoctorList():Observable<Doctor[]>
  {
    return this.httpClient.get<Doctor[]>(`${this.baseURL}`);
  }
  createDoctor(doctors:Doctor):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}`,doctors);
  }
  getDoctorById(id:number):Observable<Doctor>
  {
    return this.httpClient.get<Doctor>(`${this.baseURL}/${id}`);
  }
  updateDoctor(id:number,doctors:Doctor):Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL}/${id}`,doctors);
  }
  deleteDoctor(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
