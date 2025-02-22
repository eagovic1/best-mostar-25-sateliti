import { Component } from '@angular/core';
import { EventCardComponent } from "./event-card/event-card.component";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [EventCardComponent, MatFormFieldModule, MatInputModule, RouterModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {

}
