import { Component, OnInit } from '@angular/core';

import { TableComponent } from "../table/table.component";
import { SearchComponent } from "../search/search.component";
import User from '../models/user.interface';
import { UserService } from '../services/http/user.service';
import { UserFormComponent } from "../user-form/user-form.component";

@Component({
  selector: 'app-user',
  imports: [TableComponent, SearchComponent, UserFormComponent],
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


    Promise.all([
      this.loadUserById(1),
      this.loadJobById(2)
    ]).then(() => {
      // codigo que executa após os pedidos (Promises) terminarem
 
    })

  }

    

  private async loadUserById(id: number){
    try {
      const user = await this.userService.getUserById(1);
      console.log('dados do user', user);
    } catch(err){
      console.error(err);
    } finally {
      console.log('terminou');
    }
  }

  
  private async loadJobById(id: number){
    try {
      const user = await this.userService.getUserById(1);
      console.log('dados do user', user);
    } catch(err){
      console.error(err);
    } finally {
      console.log('terminou');
    }
  }
  
}


