import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JoinLeaderboardModalComponent } from '../../features/leaderboard/join-leaderboard-modal/join-leaderboard-modal.component';

@Injectable({
  providedIn: 'root'
})
export class OpenJoinLeaderboardService {

  constructor(private dialog: MatDialog) { }

  openJoinLeaderboardModal(): void {
    this.dialog.open(JoinLeaderboardModalComponent, {});
  }
}
