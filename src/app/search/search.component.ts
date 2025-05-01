import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SearchSharedDataServiceService } from '../services/state/search-shared-data-service.service';

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
export class SearchComponent implements OnInit, OnChanges {
   @Input() originalData: any[] = [];

  columns: string[] = [];
  selectedColumn = '';
  searchText = '';

  constructor(private searchService: SearchSharedDataServiceService) {}

  ngOnInit(): void {
    this.searchService.setFilteredData(this.originalData);
    this.extractColumns();
  }

  ngOnChanges(): void{
    this.searchService.setFilteredData(this.originalData);
    this.extractColumns();
  }

  extractColumns(): void {
    console.log(this.originalData);
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
