import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  lastdata = [
    {
      icon: 'fa-solid fa-house',
      name: 'Buttonwood, California.',
      para: 'Rosemead, CA 91770',
    },

    {
      icon: 'fa-solid fa-tablet-screen-button',
      name: ' +1 253 565 2365',
      para: 'Mon to Fri 9am to 6pm',
    },

    {
      icon: 'fa-regular fa-envelope',
      name: 'support@colorlib.com',
      para: 'Send us your query anytime!',
    },
  ];
}
