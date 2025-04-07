import { Component } from '@angular/core';
import { CounterButtonComponent } from "../counter-button/counter-button.component";
import { UserDataComponent } from "../user-data/user-data.component";

@Component({
  selector: 'app-home',
  imports: [CounterButtonComponent, UserDataComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   name : string = 'Pedro';
   age : number = 25;  
}
