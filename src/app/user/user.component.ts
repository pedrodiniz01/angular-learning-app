import { Component, OnInit } from '@angular/core';

import { TableComponent } from "../table/table.component";
import { SearchComponent } from "../search/search.component";
import User from '../models/user.interface';
import { UserService } from '../services/http/user.service';

@Component({
  selector: 'app-user',
  imports: [TableComponent, SearchComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  userData: User[] = [];

    constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: data => {
        this.userData = data; 
        console.log(this.userData);
      },
      error: error => console.error('Erro no Observable:', error)
    });
  }
}


