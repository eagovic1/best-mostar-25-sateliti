import { Component } from '@angular/core';
import { EventCardComponent } from "../events/event-card/event-card.component";
import { ArticleCardComponent } from "./article-card/article-card.component";
import { QuizComponent } from '../quiz/quiz.component';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { EventsService } from '../../core/services/api/events.service';

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
  
  constructor(private dialog: MatDialog,private eventService: EventsService){

  }
  openQuiz(): void {
    const dialogRef = this.dialog.open(QuizComponent, {

    });
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
