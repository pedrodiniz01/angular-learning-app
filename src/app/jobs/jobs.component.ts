import { Component, OnInit } from '@angular/core';
import { TableComponent } from "../table/table.component";
import Job from '../models/job.interface';
import { SearchComponent } from "../search/search.component";
import { JobService } from '../services/http/job.service';

@Component({
  selector: 'app-jobs',
  imports: [TableComponent, SearchComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent{

  jobsData: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe({
      next: data => {
        this.jobsData = data; 
        console.log(this.jobsData);
      },
      error: error => console.error('Erro no Observable:', error)
    });
  }
}
