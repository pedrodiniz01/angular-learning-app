import { Component, input, Input, OnInit, Output, output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'; 
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-table',
  imports: [MatTableModule, MatCardModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent implements OnInit {

  tableTitle = input<string>('');
  tableData = input<any[]>([]);
  paginationEnabled= input<boolean>();
  pageSize = input<number>(5);
  
  columnData: string[] = []; 
  currentPage = 0;
  presentedData: any[] = [];

  ngOnInit(): void {
    this.populateColumnNames();
    this.showUpdatedData();
  }

  populateColumnNames() : void {
  const data = this.tableData(); 
  if (data.length) {
    this.columnData = Object.keys(data[0]);
    }
  }

  showUpdatedData() {
    const data = this.tableData();
    const start = this.currentPage * this.pageSize();
    const end = start + this.pageSize();
    this.presentedData = data.slice(start, end);
  }

  nextPage(): void {
    const data = this.tableData();
    if ((this.currentPage + 1) * this.pageSize() < data.length) {
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
}
