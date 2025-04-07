import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-counter-button',
  imports: [MatButtonModule],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.scss'
})
export class CounterButtonComponent {

  count : number = 0;

  counter() {
    this.count++;
  }

  resetCounter() {
    this.count = 0;
  }

  addRandomNumber() {
    
  }
}
