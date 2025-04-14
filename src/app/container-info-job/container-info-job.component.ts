import { Component, inject } from '@angular/core';
import { TableComponent } from "../table/table.component";
import jobsData from '../mocks/jobs-data.json';
import Job from '../models/job.interface';
import { SharedDataHomeServiceService } from '../services/shared-data-home-service.service';

@Component({
  selector: 'app-container-info-job',
  imports: [TableComponent],
  templateUrl: './container-info-job.component.html',
  styleUrl: './container-info-job.component.scss'
})
export class ContainerInfoJobComponent {

  jobsData: Job[] = jobsData;

  private sharedService = inject(SharedDataHomeServiceService);

  selectedIdTrigger(id: number) {
    this.sharedService.setSelectedEntity(id);
  }
}
