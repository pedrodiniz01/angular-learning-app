import { Component, OnInit } from '@angular/core';
import usersMock from '../mocks/users-mock.json';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'; 
import { CommonModule } from '@angular/common'; 

interface User {
  id: number;
  name: string;
  age: number;
  job: string;
}

@Component({
  selector: 'app-user-data',
  standalone: true, 
  imports: [MatTableModule, MatCardModule, CommonModule],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss'
})

export class UserDataComponent implements OnInit {

  usersData = usersMock;
  columnNames: string[] = []; 

  ngOnInit(): void {
    this.populateColumnNames();
  }

  populateColumnNames() : void {
    if (this.usersData.length) {
      this.columnNames = Object.keys(this.usersData[0]);
    }
  }
}
