import { CommonModule } from '@angular/common';
import { Component, ComponentFactoryResolver, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  quizState: 'start' | 'playing' | 'end' = 'start';
  score = 0;
  quizFinished = false;
  xp = 0; // XP Points
  questions = [
    {
      question: 'Koja je glavna svrha fotosinteze kod biljaka?',
      answers: [
        'Proizvodnja kiseonika',
        'Proizvodnja hrane',
        'Smanjenje zagađenja',
        'Privlačenje oprašivača'
      ],
      correct: 1
    },
    {
      question: 'Koji gas najviše doprinosi efektu staklene bašte?',
      answers: [
        'Azot',
        'Kiseonik',
        'Ugljen-dioksid',
        'Argon'
      ],
      correct: 2
    },
    {
      question: 'Koji oblik energije koriste solarni paneli?',
      answers: [
        'Hemijsku energiju',
        'Termalnu energiju',
        'Električnu energiju',
        'Svetlosnu energiju'
      ],
      correct: 3
    },
    {
      question: 'Koji od ovih otpada je biorazgradiv?',
      answers: [
        'Plastična flaša',
        'Staklena tegla',
        'Karton',
        'Aluminijumska limenka'
      ],
      correct: 2
    },
    {
      question: 'Koji je glavni izvor energije na Zemlji?',
      answers: [
        'Geotermalna toplota',
        'Energija vetra',
        'Energija Sunca',
        'Hidroenergija'
      ],
      correct: 2
    }
  ];

  currentQuestionIndex = 0;
  selectedAnswerIndex: number | null = null; // Tracks selected answer
  selectAnswer(index: number) {
    this.selectedAnswerIndex = index;
  }
  startQuiz() {
    this.quizState = 'playing';
    this.currentQuestionIndex = 0;
    this.score = 0;
  }

  answerQuestion(index: number) {
    if (index === this.questions[this.currentQuestionIndex].correct) {
      this.score++; // Increase score if correct
    }
    this.nextQuestion();
  }
  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }
  nextQuestion() {
    if (this.selectedAnswerIndex !== null) {
      if (this.selectedAnswerIndex === this.questions[this.currentQuestionIndex].correct) {
        this.score++;
      }
    }

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedAnswerIndex = null; // Reset selection for the next question
    }  else {
      this.finishQuiz();
    }
  }
  finishQuiz() {
    this.quizState = 'end';
    this.quizFinished = true;
    this.xp = this.score * 10; // Each correct answer gives 10 XP
  }
  closeQuiz() {
    this.quizState = 'start';
  }
}
