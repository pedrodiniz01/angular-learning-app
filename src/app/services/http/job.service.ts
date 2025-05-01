import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Job from '../../models/job.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) {}

  private url = 'http://localhost:3000/'; 
  private path = 'jobs/'

  getJobs(): Observable<Job[]>{
    return this.http.get<Job[]>(this.url+this.path);
  }
}
