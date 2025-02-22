import { Component, OnInit } from '@angular/core';
import { OpenJoinLeaderboardService } from '../../core/services/open-join-leaderboard.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LeaderboardOption } from '../../core/models/leaderboard-option';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
  
})
export class LeaderboardComponent implements OnInit{
  members = [
    {position: 1, name: "Edis Jasarevic", points: 51},
    {position: 1, name: "Edis Jasarevic", points: 51},
    {position: 1, name: "Edis Jasarevic", points: 51},
    {position: 1, name: "Edis Jasarevic", points: 51},
    {position: 1, name: "Edis Jasarevic", points: 51},
    {position: 1, name: "Edis Jasarevic", points: 51},
    {position: 1, name: "Edis Jasarevic", points: 51},
    {position: 1, name: "Edis Jasarevic", points: 51}
  ]

  constructor(private openJoinLeaderboardService: OpenJoinLeaderboardService) {
    this.formGroup = new FormGroup({
      selectedOption: new FormControl<LeaderboardOption | null>(null)
  });
  }

  openJoinModal() {
    this.openJoinLeaderboardService.openJoinLeaderboardModal();
  }

  options: LeaderboardOption[] | undefined;
    
    formGroup: FormGroup;

    ngOnInit() {
        this.options = [
            { name: 'Global', code: 'GL' },
            { name: 'Private', code: 'PR' },
        ];

        this.formGroup = new FormGroup({
            selectedOption: new FormControl<LeaderboardOption| null>(null)
        });
    }
}
