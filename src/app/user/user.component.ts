import { Component } from '@angular/core';
import mockData from '../mocks/mock-data.json';
import User from '../models/user.interface';
import { TableComponent } from "../table/table.component";

@Component({
  selector: 'app-user',
  imports: [TableComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  userData: User[] = mockData;

}
