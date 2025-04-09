import { Component, OnInit } from '@angular/core';
import jobsData from '../mocks/jobs-data.json';
import { TableComponent } from "../table/table.component";
import Job from '../models/job.interface';

@Component({
  selector: 'app-jobs',
  imports: [TableComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {

  jobsData: Job[] = jobsData;
  
}