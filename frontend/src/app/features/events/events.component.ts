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
  events: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.get<any>('http://localhost:3000/api/events', { headers, withCredentials: true })
   .pipe(take(1))  // Only take the first response
   .subscribe(
     (data) => {
       this.events = data;
       console.log(data);
     },
     (error) => {
       console.error('Error fetching events', error);
     }
   );
  }
}