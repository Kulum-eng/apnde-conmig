import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/modelsUser';

@Injectable({
  providedIn: 'root'
})
export class ServiceusersService {

  private apiUrl = 'http://localhost:8000/api/v1/users';

  constructor(private http: HttpClient) { }

  registerUser(user: Users): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  loginUser(email: string, password: string): Observable<{ token: string; user: { id: number; username: string } }> {
    return this.http.post<{ token: string; user: { id: number; username: string } }>(`${this.apiUrl}/login`, { email, password });
  }
}
