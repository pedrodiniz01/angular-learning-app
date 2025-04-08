import { Component, input, Input, Output, output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'; 
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-table',
  imports: [MatTableModule, MatCardModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent {

  tableTitle = input<string>('');
  tableData = input<any[]>([]);
  columnData = input<any[]>([]);
  message = output<string>();

  communicateToParent() {
    this.message.emit('New message.');
  }

}
