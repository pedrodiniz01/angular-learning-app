import { Component } from '@angular/core';
import { UserComponent } from "../user/user.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { MatIconModule } from '@angular/material/icon';
import { ContainerInfoJobComponent } from "../container-info-job/container-info-job.component";
import { ContainerInfoUserComponent } from "../container-info-user/container-info-user.component";

@Component({
  selector: 'app-home',
  imports: [UserComponent, NavbarComponent, MatIconModule, ContainerInfoJobComponent, ContainerInfoUserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
