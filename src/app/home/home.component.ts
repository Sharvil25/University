import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  scholardata = [
    {
      color: '#ebb830',
      icon: 'fa-solid fa-graduation-cap',
      name: 'Scholarship',
      time: 'Available',
    },

    {
      color: '#317bd6',
      icon: 'fa-solid fa-triangle-exclamation',
      name: 'Scholarship',
      time: 'Available',
    },

    {
      color: '#1fc2d9',
      icon: 'fa-solid fa-book-open-reader',
      name: 'Scholarship',
      time: 'Available',
    },
  ];
}
