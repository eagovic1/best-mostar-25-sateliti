import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, MatTabsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  oldEvents: any[] = [
    {name: 'Sadnja drveća na parku', organisation: 'Green Earth', date: '12 Jan', xp: '30'},
    {name: 'Pošumljavanje uz rijeku', organisation: 'Eco Action', date: '25 Jan', xp: '35'},
    {name: 'Obnova šumskih područja', organisation: 'Forests of Tomorrow', date: '5 Feb', xp: '40'},
    {name: 'Volontiranje u zaštićenim područjima', organisation: 'Wildlife Conservation', date: '10 Feb', xp: '50'},
    {name: 'Sadnja drveća u urbanim sredinama', organisation: 'Urban Green', date: '15 Feb', xp: '45'},
    {name: 'Zeleni projekat u školama', organisation: 'Eco Schools', date: '20 Feb', xp: '25'}
  ];
  
  newEvents: any[] = [
    {name: 'Sadnja drveća u blizini jezera', organisation: 'Nature Protectors', date: '28 Feb', xp: '40'},
    {name: 'Pošumljavanje u planinskoj oblasti', organisation: 'Mountain Green', date: '2 Mar', xp: '50'},
    {name: 'Ekološki forum o obnovljivim izvorima energije', organisation: 'Clean Energy', date: '8 Mar', xp: '20'},
    {name: 'Projekat zaštite biodiverziteta', organisation: 'Biodiversity Alliance', date: '14 Mar', xp: '30'}
  ];
}
