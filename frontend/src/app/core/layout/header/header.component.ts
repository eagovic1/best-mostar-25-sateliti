import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
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
