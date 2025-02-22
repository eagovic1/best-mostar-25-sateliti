import { Component } from '@angular/core';
import { EventCardComponent } from "../events/event-card/event-card.component";
import { ArticleCardComponent } from "./article-card/article-card.component";
import { QuizComponent } from '../quiz/quiz.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EventCardComponent, ArticleCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private dialog: MatDialog){

  }
  openQuiz(): void {
    const dialogRef = this.dialog.open(QuizComponent, {

    });
  }
}
