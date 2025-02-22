import { Component, Input, OnInit } from '@angular/core';
import { EventsService } from '../../../core/services/api/events.service';
import { DateTimeModel } from '../../../core/models/date-time-model';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent{
  @Input() event: any;
  date!: DateTimeModel;

  constructor(private eventService: EventsService) {}
  
  /*
  mapDate(dateString: string): DateTimeModel {
      const dateParts = dateString.split(' ');
      const dateArray = dateParts[0].split('-');
      const timeArray = dateParts[1].split(':');
  
      return {
        year: parseInt(dateArray[0], 10),
        month: parseInt(dateArray[1], 10),
        day: parseInt(dateArray[2], 10),
        hour: parseInt(timeArray[0], 10),
        minute: parseInt(timeArray[1], 10),
        second: parseInt(timeArray[2], 10)
      };
    }
      */

}
