import { Component, input, Input, OnInit, Output, output, SimpleChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'; 
import { CommonModule } from '@angular/common'; 
import { SearchSharedDataServiceService } from '../services/state/search-shared-data-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-table',
  imports: [MatTableModule, MatCardModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent implements OnInit{

  tableTitle = input<string>('');
  paginationEnabled = input<boolean>();
  pageSize = input<number>(5);

  columnData: string[] = []; 
  currentPage = 0;
  presentedData: any[] = [];
  fullData: any[] = [];

  constructor(private searchSharedDataServiceService: SearchSharedDataServiceService) {}

  ngOnInit(): void {
    this.searchSharedDataServiceService.filteredData$.subscribe(data => {
      this.fullData = data;
      this.populateColumnNames();
      this.currentPage = 0;
      this.showUpdatedData();
    });
  }

  rowClicked(id: string): void{
    console.log('foi clicado a row: ', id);
  }

  nextPage(): void {
    if ((this.currentPage + 1) * this.pageSize() < this.fullData.length) {
      this.currentPage++;
      this.showUpdatedData();
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.showUpdatedData();
    }
  }

  private populateColumnNames(): void {
    if (this.fullData.length > 0) {
      this.columnData = Object.keys(this.fullData[0]);
    }
  }

  private showUpdatedData(): void {
    const start = this.currentPage * this.pageSize();
    const end = start + this.pageSize();
    this.presentedData = this.fullData.slice(start, end);
  }
}
