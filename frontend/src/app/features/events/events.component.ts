import { Component, OnInit } from '@angular/core';
import { EventCardComponent } from "./event-card/event-card.component";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { EventsService } from '../../core/services/api/events.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [EventCardComponent, MatFormFieldModule, MatInputModule, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  events: any[] = [];
  filteredEvents: any[] = [];

  filterForm: FormGroup;

  constructor(private fb: FormBuilder, private eventService: EventsService) {
    this.filterForm = this.fb.group({
      time: ['week'], // Default value
      location: ['10'], // Default value (km)
      eventSize: ['all'] // Default value
    });
  }

  ngOnInit(): void {
    this.fetchEvents();
    this.filterForm.valueChanges.subscribe(() => this.applyFilters());
    
  }

  fetchEvents() {
    this.eventService.getEvents().subscribe((data: any) => {
      this.events = data.data;
      this.applyFilters(); // Apply filters after fetching data
    });
  }

  applyFilters() {
    const { time, location, eventSize } = this.filterForm.value;

    this.filteredEvents = this.events;/*.filter(event => {
      return this.filterByTime(event, time) &&
             this.filterByLocation(event, location) &&
             this.filterBySize(event, eventSize);
    });*/
  }

  filterByTime(event: any, filter: string): boolean {
    const eventDate = new Date(event.date);
    const now = new Date();
    
    switch (filter) {
      case 'today':
        return eventDate.toDateString() === now.toDateString();
      case 'week':
        const weekFromNow = new Date();
        weekFromNow.setDate(now.getDate() + 7);
        return eventDate >= now && eventDate <= weekFromNow;
      case 'month':
        return eventDate.getMonth() === now.getMonth() && eventDate.getFullYear() === now.getFullYear();
      case 'all':
      default:
        return true;
    }
  }

  filterByLocation(event: any, filter: string): boolean {
    if (filter === 'all') return true;
    const eventDistance = event.distance || 0; // Assuming the event has a distance property
    return eventDistance <= parseInt(filter, 10);
  }

  filterBySize(event: any, filter: string): boolean {
    if (filter === 'all') return true;
    return event.attendees <= parseInt(filter, 10);
  }
}