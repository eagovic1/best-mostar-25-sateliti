import { Component, OnInit } from '@angular/core';
import { EventCardComponent } from "./event-card/event-card.component";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { EventsService } from '../../core/services/api/events.service';


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [EventCardComponent, MatFormFieldModule, MatInputModule, RouterModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit{

  events: any[] | undefined;
  constructor(public eventsService: EventsService) {

  }
  ngOnInit(): void {
    this.eventsService.getEvents().subscribe((res : any) => {
      console.log("adadadadadadada" + res);
      this.events = res;
    });

  }
}
