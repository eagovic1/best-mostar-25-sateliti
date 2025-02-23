import { Pipe, PipeTransform } from '@angular/core';
import { DateTimeModel } from '../models/date-time-model';

@Pipe({
  name: 'dateToModel',
  standalone: true
})
export class DateToModelPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    // Parse the input datetime string
    const date = new Date(value);

    // Define an array of month names for easy access
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Get the day and month from the date
    const day = date.getDate();
    const month = months[date.getMonth()];

    // Format the time (hours and minutes)
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    // Return the formatted string in the format: "2 Feb - 01:00"
    return `${day} ${month} - ${hours}:00 PM`;
  }

}
