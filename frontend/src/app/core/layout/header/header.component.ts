import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isProfileClicked = false;
  isNotificationClicked = false;
  
  constructor() {}
  toggleProfileMenu(): void {    
    this.isProfileClicked = !this.isProfileClicked;
  }
  toggleNotificationMenu(): void {
    this.isNotificationClicked = !this.isNotificationClicked;
  }
}
