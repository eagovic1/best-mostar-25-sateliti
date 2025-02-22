import { Component, ComponentFactoryResolver, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  questions = [
    { title: 'Question 1', answers: ['Answer 1.1', 'Answer 1.2', 'Answer 1.3', 'Answer 1.4'] },
    // Add more questions as needed
  ];
  selectedAnswer: string | undefined;
  quizStarted = false;

startQuiz() {
  this.quizStarted = true;
}

  restartQuiz() {
    // Reset quiz logic here
    this.selectedAnswer = '';
  }
  
  constructor(private dialogRef: MatDialogRef<QuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private componentFactoryResolver: ComponentFactoryResolver
    ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
  @ViewChild('container', { read: ViewContainerRef, static: true }) container?: ViewContainerRef;

  loadComponent(component: any): void {
    this.container?.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.container?.createComponent(componentFactory);
  }

}
