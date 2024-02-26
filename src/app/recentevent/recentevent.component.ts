import { Component } from '@angular/core';

@Component({
  selector: 'app-recentevent',
  templateUrl: './recentevent.component.html',
  styleUrls: ['./recentevent.component.css'],
})
export class RecenteventComponent {
  recent = [
    {
      data: '02',
      Fulldate: 'Dec,2020',
      heading: 'How to speake like a nativespeaker?',
      time: '10:30pm',
      anotherdate: '21Nov2020',
      location: 'AH Oditoriam',
      colour: '#317bd6',
    },

    {
      data: '03',
      Fulldate: 'Dec,2020',
      heading: 'How to speake like a nativespeaker?',
      time: '10:30pm',
      anotherdate: '21Nov2020',
      location: 'AH Oditoriam',
      colour: '#ebb830',
    },

    {
      data: '10',
      Fulldate: 'Dec,2020',
      heading: 'How to speake like a nativespeaker?',
      time: '10:30pm',
      anotherdate: '21Nov2020',
      location: 'AH Oditoriam',
      colour: '#317bd6',
    },
  ];
}
