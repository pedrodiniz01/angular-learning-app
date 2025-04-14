import { Component } from '@angular/core';
import userData from '../mocks/users-data.json';
import { TableComponent } from "../table/table.component";
import { SearchComponent } from "../search/search.component";
import { SearchSharedDataServiceService } from '../services/search-shared-data-service.service';

@Component({
  selector: 'app-user',
  imports: [TableComponent, SearchComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  userData = userData;

  constructor(private searchService: SearchSharedDataServiceService) {}

  ngOnInit(): void {
    this.searchService.setFilteredData(this.userData);
  }
}
