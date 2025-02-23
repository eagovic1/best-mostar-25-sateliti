import { Component } from '@angular/core';
import { EventCardComponent } from "../events/event-card/event-card.component";
import { ArticleCardComponent } from "./article-card/article-card.component";
import { QuizComponent } from '../quiz/quiz.component';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { EventsService } from '../../core/services/api/events.service';
import { OpenQuizService } from '../../core/services/open-quiz.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EventCardComponent, ArticleCardComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  numbers: number[]=[2,3,4,5]
  events: any[] = [];
  dates: any[] = [
    {day:15, month: 'Mar', hours: '10'},
    {day:20, month: 'Mar', hours: '09'},
    {day:17, month: 'Apr', hours: '10'},
    {day:28, month: 'Apr', hours: '10'},
    {day:14, month: 'May', hours: '11'},
    {day:17, month: 'Jun', hours: '10'},
    {day:17, month: 'Jun', hours: '12'},
    {day:15, month: 'Jul', hours: '10'}
  ]

  articles: any[] = [
    {category: 'Ecology', title: 'The Fight Against Climate Change', author: 'By Jane Smith'},
    {category: 'Global Warming', title: 'Global Warming: Myth or Reality?', author: 'By Mark Johnson'},
    {category: 'Sustainability', title: 'The CO₂ Crisis and Our Future', author: 'By Sarah Green'},
    {category: 'Clean Energy', title: 'Renewable Energy: A Path Forward', author: 'By Alex Brown'}

  ]
  peoples: number[] = [40,50,100,10,40,40,10,20];
  
  constructor(private dialog: MatDialog,private eventService: EventsService, private openQuizService: OpenQuizService){

  }
  
  openQuiz(): void {
    this.openQuizService.openQuiz();
  }

  ngOnInit(): void {
    this.fetchEvents();
    
  }

  fetchEvents() {
    this.eventService.getEvents().subscribe((data: any) => {
      this.events = data.data;
      //this.applyFilters(); // Apply filters after fetching data
    });
  }

  
}
