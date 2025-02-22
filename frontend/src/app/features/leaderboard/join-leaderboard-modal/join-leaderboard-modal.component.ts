import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-join-leaderboard-modal',
  standalone: true,
  imports: [MatFormFieldModule, 
    MatInputModule,],
  templateUrl: './join-leaderboard-modal.component.html',
  styleUrl: './join-leaderboard-modal.component.scss'
})
export class JoinLeaderboardModalComponent {

}
