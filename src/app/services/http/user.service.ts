import { Injectable } from '@angular/core';
import User from '../../models/user.interface';
import { firstValueFrom, Observable } from 'rxjs';
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
  
  getUserByIdObs(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}${this.path}${id}`);
  }

  async getUserById(id: number): Promise<User> {
    const res$ = this.http.get<User>(`${this.url}${this.path}${id}`);
    return await firstValueFrom(res$);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}${this.path}`, user);
  }
}
