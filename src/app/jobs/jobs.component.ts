import { Component, OnInit } from '@angular/core';
import jobsData from '../mocks/jobs-data.json';
import { TableComponent } from "../table/table.component";
import Job from '../models/job.interface';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-jobs',
  imports: [TableComponent, SearchComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {

  originalJobsData: Job[] = jobsData;
  jobsData: Job[] = jobsData;

  onFilteredJobs(filtered: Record<string, any>[]): void {
      this.jobsData = filtered as Job[];
    }
  }
