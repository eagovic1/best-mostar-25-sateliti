import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, MatTabsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  oldEvents: any[] = [
    {name: 'Posumljavanje', organisation: 'Isatis', date: '19 Feb', xp: '24'},
    {name: 'Posumljavanje', organisation: 'Isatis', date: '19 Feb', xp: '24'},
    {name: 'Posumljavanje', organisation: 'Isatis', date: '19 Feb', xp: '24'},
    {name: 'Posumljavanje', organisation: 'Isatis', date: '19 Feb', xp: '24'},
    {name: 'Posumljavanje', organisation: 'Isatis', date: '19 Feb', xp: '24'},
    {name: 'Posumljavanje', organisation: 'Isatis', date: '19 Feb', xp: '24'}
  ]

  newEvents: any[] = [
    {name: 'Posumljavanje', organisation: 'Isatis', date: '19 Feb', xp: '24'},
    {name: 'Posumljavanje', organisation: 'Isatis', date: '19 Feb', xp: '24'},
    {name: 'Posumljavanje', organisation: 'Isatis', date: '19 Feb', xp: '24'},
    {name: 'Posumljavanje', organisation: 'Isatis', date: '19 Feb', xp: '24'},

  ]
}
