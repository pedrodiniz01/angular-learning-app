import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component"; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'new-project';
}
