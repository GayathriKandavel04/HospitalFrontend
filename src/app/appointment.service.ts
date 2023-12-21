import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseURL="http://localhost:8080/appointments";
  constructor( private httpClient:HttpClient) { }

  getBookedAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseURL}`);
  }

  getAppointmentList():Observable<Appointment[]>
  {
    return this.httpClient.get<Appointment[]>(`${this.baseURL}`);
  }
  createAppointment(appointments:Appointment):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}`,appointments);
  }
  getAppointmentById(id:number):Observable<Appointment>
  {
    return this.httpClient.get<Appointment>(`${this.baseURL}/${id}`);
  }
  updateAppointment(id:number,appointments:Appointment):Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL}/${id}`,appointments);
  }
  deleteAppointment(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }}
