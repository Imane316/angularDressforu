import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DressService {
  private apiUrl = 'http://localhost:8880';

  constructor(private http: HttpClient) { }

  saveDress(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/savedress`, data);
  }

  getDresses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dresses`);
  }

  getDressById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/dress/${id}`);
  }

  addDress(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.apiUrl}/dress`, data);

  }

  updateDress(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/dress/${id}`, data);
  }

  deleteDress(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/dress/${id}`);
  }
}
