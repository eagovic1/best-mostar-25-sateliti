import { Pipe, PipeTransform } from '@angular/core';
import { DateTimeModel } from '../models/date-time-model';

@Pipe({
  name: 'dateToObject',
  standalone: true
})
export class DateToObjectPipe implements PipeTransform {

  transform(value: string): DateTimeModel {
    if (!value) return { day: '', month: '', time: '' };

    // Parse the input datetime string
    const date = new Date(value);

    // Define an array of month names for easy access
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Get the day and month from the date
    const day = date.getDate().toString();
    const month = months[date.getMonth()];

    // Format the time (hours and minutes)
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const time = `${hours}:00`;

    // Return an object with day, month, and time
    return { day, month, time };
  }

}
