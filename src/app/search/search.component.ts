import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SearchSharedDataServiceService } from '../services/search-shared-data-service.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
   @Input() originalData: any[] = [];

  columns: string[] = [];
  selectedColumn = '';
  searchText = '';

  constructor(private searchService: SearchSharedDataServiceService) {}

  ngOnInit(): void {
    this.extractColumns();
    this.searchService.setFilteredData(this.originalData);
  }

  extractColumns(): void {
    if (this.originalData.length > 0) {
      const allKeys = new Set<string>();
      this.originalData.forEach(entry => {
        Object.keys(entry).forEach(key => allKeys.add(key));
      });
      this.columns = Array.from(allKeys);
    }
  }

  onSearch(): void {
    if (!this.selectedColumn || !this.searchText?.trim()) {
      this.searchService.setFilteredData(this.originalData);
      return;
    }

    const filteredData = this.originalData.filter(item => {
      const field = item[this.selectedColumn];
      return field !== undefined && String(field).toLowerCase().includes(this.searchText.trim().toLowerCase());
    });

    this.searchService.setFilteredData(filteredData);
  }

  onReset(): void {
    this.searchText = '';
    this.selectedColumn = '';
    this.searchService.setFilteredData(this.originalData);  
  }
}
