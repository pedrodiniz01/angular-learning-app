import { Component, inject } from '@angular/core';
import { TableComponent } from "../table/table.component";
import User from '../models/user.interface';
import userData from '../mocks/users-data.json';
import { SharedDataHomeServiceService } from '../services/shared-data-home-service.service';

@Component({
  selector: 'app-container-info-user',
  imports: [TableComponent],
  templateUrl: './container-info-user.component.html',
  styleUrl: './container-info-user.component.scss'
})
export class ContainerInfoUserComponent {

  userData: User[] = userData;

  private sharedHomeService = inject(SharedDataHomeServiceService);

  constructor(){
    this.sharedHomeService.selectedEntity$.subscribe(id => {
      console.log(id);
      if(id) {
        console.log('antes', this.userData);
        this.userData = this.userData.filter(user => user.jobId === id);
        console.log('depois', this.userData);
      }
    });
  }
}
