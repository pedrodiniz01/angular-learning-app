import { Component, OnInit } from '@angular/core';
import { TableComponent } from "../table/table.component";
import usersMock from '../mocks/users-mock.json';
import User from '../models/user.interface';

@Component({
  selector: 'app-home',
  imports: [TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  tableDataParent: User[] = usersMock;
  columnDataParent: string[] = []; 


  ngOnInit(): void {
    this.populateColumnNames();
  }

  populateColumnNames() : void {
    if (this.tableDataParent.length) {
      this.columnDataParent = Object.keys(this.tableDataParent[0]);
    }
  }

  receivedFromChild(message: string) {
    console.log(message)
  }
}
