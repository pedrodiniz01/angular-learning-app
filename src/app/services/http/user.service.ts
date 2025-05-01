import { Injectable } from '@angular/core';
import User from '../../models/user.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  private url = 'http://localhost:3000/'; 
  private path = 'users/'

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url+this.path);
  }
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}${this.path}${id}`);
  }
}
