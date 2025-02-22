import { Pipe, PipeTransform } from '@angular/core';
import { DateTimeModel } from '../models/date-time-model';

@Pipe({
  name: 'dateToModel',
  standalone: true
})
export class DateToModelPipe implements PipeTransform {

  transform(dateString: string): DateTimeModel {
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
