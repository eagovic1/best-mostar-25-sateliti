import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { EventsComponent } from './features/events/events.component';
import { TasksComponent } from './features/tasks/tasks.component';
import { LeaderboardComponent } from './features/leaderboard/leaderboard.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'events', component: EventsComponent},
    {path: 'tasks', component: TasksComponent},
    {path: 'leaderboard', component: LeaderboardComponent}
    
];
