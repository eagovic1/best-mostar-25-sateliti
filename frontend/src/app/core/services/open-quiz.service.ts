import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuizComponent } from '../../features/quiz/quiz.component';

@Injectable({
  providedIn: 'root'
})
export class OpenQuizService {

  constructor(private dialog: MatDialog) { }

  openQuiz(){
      this.dialog.open(QuizComponent, {});
    }
}
