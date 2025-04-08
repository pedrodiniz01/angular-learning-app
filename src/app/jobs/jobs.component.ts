import { Component, OnInit } from '@angular/core';
import mockData from '../mocks/mock-data.json';
import User from '../models/user.interface';
import { TableComponent } from "../table/table.component";

@Component({
  selector: 'app-jobs',
  imports: [TableComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit {

  jobsCount: { job: string; count: number }[] = [];

  ngOnInit(): void {
    this.jobsCount = this.countJobs(mockData);
  }

  private countJobs(data: any[]): { job: string; count: number }[] {
    const countMap: { [job: string]: number } = {};

    for (const { job } of data) {
      if (!job) continue;
      countMap[job] = (countMap[job] || 0) + 1;
    }

    return Object.entries(countMap).map(([job, count]) => ({ job, count })); /* converts map into an json */
  }
}