import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../core/services/api/events.service';
import { DateTimeModel } from '../../../core/models/date-time-model';
import { DateToModelPipe } from "../../../core/pipes/date-to-model.pipe";
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-page',
  standalone: true,
  imports: [DateToModelPipe, MatSnackBarModule, CommonModule],
  templateUrl: './event-page.component.html',
  styleUrl: './event-page.component.scss'
})
export class EventPageComponent implements OnInit {
  id: number = 0;
  event: any;
  date: DateTimeModel | undefined;
  joined: boolean = false;

  constructor(private route: ActivatedRoute, private eventService: EventsService,private snackBar: MatSnackBar ){}
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
      //this.members = company.users;
      //console.log(this.members);
      //this.filterCompanies();
    });
  }

  joinEvent(): void {
    this.joined = true;  // Mark the event as joined
    this.snackBar.open('You have joined the event!', 'Close', {
      duration: 3000,
    });
  }

}
