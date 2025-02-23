import { Component, OnInit } from '@angular/core';
import { OpenJoinLeaderboardService } from '../../core/services/open-join-leaderboard.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeaderboardOption } from '../../core/models/leaderboard-option';
import { Select } from 'primeng/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [ReactiveFormsModule, Select, FormsModule, CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
  
})
export class LeaderboardComponent implements OnInit{
  members = [
    {position: 1, name: "Emir Agovic", points: 51},
    {position: 2, name: "Edis Jasarevic", points: 48},
    {position: 3, name: "Benjamin Uzunovic", points: 37},
    {position: 4, name: "Ahmed Ljubuncic", points: 36},
    {position: 5, name: "Mersid Pilipovic", points: 32},
    {position: 6, name: "Elvir Vlahovljak", points: 28},
    {position: 7, name: "Burhan Ljubovic", points: 27},
    {position: 8, name: "Irhad Topovcic", points: 26}
  ]

  constructor(private openJoinLeaderboardService: OpenJoinLeaderboardService) {
    /*
    this.formGroup = new FormGroup({
      selectedOption: new FormControl<LeaderboardOption | null>(null)
  });
  */
  }

  openJoinModal() {
    this.openJoinLeaderboardService.openJoinLeaderboardModal();
  }

  selectedOption: string | undefined ; 

  options = [
    { label: 'Global', value: 'global' },
    { label: 'Private', value: 'private' }
  ];
  ngOnInit() {
    // Set the default selected option to the first one
    this.selectedOption = this.options[0].value;
  }
}
