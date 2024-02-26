import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navdata = [
    {
      name: 'Home',
      url: '/Home',
    },

    {
      name: 'Courses',
      url: '/Courses',
    },

    {
      name: 'Blog',
      url: '/Blog',
    },

    {
      name: 'Event',
      url: '/Event',
    },

    {
      name: 'Contact',
      url: '/Contact',
    },
  ];
}
