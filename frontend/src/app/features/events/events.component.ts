import { Component, OnInit } from '@angular/core';
import { EventCardComponent } from "./event-card/event-card.component";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { EventsService } from '../../core/services/api/events.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [EventCardComponent, MatFormFieldModule, MatInputModule, RouterModule, CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  events: any[] = [];

  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data.data;
      console.log(this.events);
    },
    )
  }
}