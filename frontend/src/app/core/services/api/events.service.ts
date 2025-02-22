import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/events`);
  }
  getEventById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event);
  }
  addParticipantToEvent(eventId: number, participantData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/events/${eventId}/participants`, participantData);
  }


}
