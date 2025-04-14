import { Component } from '@angular/core';
import { UserComponent } from "../user/user.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [UserComponent, NavbarComponent, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
