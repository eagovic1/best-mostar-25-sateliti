import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../core/services/api/events.service';
import { DateTimeModel } from '../../../core/models/date-time-model';

@Component({
  selector: 'app-event-page',
  standalone: true,
  imports: [],
  templateUrl: './event-page.component.html',
  styleUrl: './event-page.component.scss'
})
export class EventPageComponent implements OnInit {
  id: number = 0;
  event: any;
  date: DateTimeModel | undefined;

  constructor(private route: ActivatedRoute, private eventService: EventsService){}
  ngOnInit(): void {
  
    const idParam = this.route.snapshot.paramMap.get('id');
      if (idParam !== null) {
        this.id = +idParam;
    }
    console.log("id:" +this.id);
    this.getEvent();
    /*
    setTimeout(() => {
      this.getCompanyUsers();
      console.log("Company: ", this.company);
      console.log("Members: ", this.members);
    }, 200);
    */
    
    
  }

  getEvent(): void {
    this.eventService.getEventById(this.id).subscribe(event => {
      console.log(event.data);
      this.event = event.data;
      this.event.date = this.mapDate(event.date)
      //this.members = company.users;
      //console.log(this.members);
      //this.filterCompanies();
    });
  }

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
}
