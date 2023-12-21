import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receptionist } from './receptionist';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {

  private baseURL="http://localhost:8080/receptionist";
  constructor( private httpClient:HttpClient) { }

  getReceptionistList():Observable<Receptionist[]>
  {
    return this.httpClient.get<Receptionist[]>(`${this.baseURL}`);
  }
  createReceptionist(receptionist:Receptionist):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}`,receptionist);
  }
  getReceptionistById(id:number):Observable<Receptionist>
  {
    return this.httpClient.get<Receptionist>(`${this.baseURL}/${id}`);
  }
  updateReceptionist(id:number,receptionist:Receptionist):Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL}/${id}`,receptionist);
  }
  deleteReceptionist(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
