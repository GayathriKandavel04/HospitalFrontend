import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prescription } from './prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  private baseURL="http://localhost:8080/prescription";
  constructor( private httpClient:HttpClient) { }

  getPrescriptionList():Observable<Prescription[]>
  {
    return this.httpClient.get<Prescription[]>(`${this.baseURL}`);
  }
  createPrescription(prescription:Prescription):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}`,prescription);
  }
  getPrescriptionById(id:number):Observable<Prescription>
  {
    return this.httpClient.get<Prescription>(`${this.baseURL}/${id}`);
  }
  updatePrescription(id:number,prescription:Prescription):Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL}/${id}`,prescription);
  }
  deletePrescription(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
