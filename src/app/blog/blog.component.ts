import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  blogdata = [
    {
      img: '/assets/Image/singleblog.png.webp',
      date: '15',
      month: 'Jan',
      link: 'Google inks pact for new 35-storey office',
      para: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      icon: 'fa-solid fa-user',
      travel: 'Travel, Lifestyle',
      line: '|',
      icons: 'fa-solid fa-comment',
      cmnt: '03 Comments',
    },

    {
      img: '/assets/Image/phone.webp',
      date: '15',
      month: 'Jan',
      link: 'Google inks pact for new 35-storey office',
      para: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      icon: 'fa-solid fa-user',
      travel: 'Travel, Lifestyle',
      line: '|',
      icons: 'fa-solid fa-comment',
      cmnt: '03 Comments',
    },

    {
      img: '/assets/Image/shoes.webp',
      date: '15',
      month: 'Jan',
      link: 'Google inks pact for new 35-storey office',
      para: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      icon: 'fa-solid fa-user',
      travel: 'Travel, Lifestyle',
      line: '|',
      icons: 'fa-solid fa-comment',
      cmnt: '03 Comments',
    },

    {
      img: '/assets/Image/glass.webp',
      date: '15',
      month: 'Jan',
      link: 'Google inks pact for new 35-storey office',
      para: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      icon: 'fa-solid fa-user',
      travel: 'Travel, Lifestyle',
      line: '|',
      icons: 'fa-solid fa-comment',
      cmnt: '03 Comments',
    },

    {
      img: '/assets/Image/coffee.webp',
      date: '15',
      month: 'Jan',
      link: 'Google inks pact for new 35-storey office',
      para: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      icon: 'fa-solid fa-user',
      travel: 'Travel, Lifestyle',
      line: '|',
      icons: 'fa-solid fa-comment',
      cmnt: '03 Comments',
    },
  ];

  fooddata = [
    {
      name: 'Resaurant food',
      count: 37,
    },

    {
      name: 'Travel news',
      count: 10,
    },

    {
      name: 'Modern technology',
      count: 3,
    },

    {
      name: 'Product',
      count: 11,
    },

    {
      name: 'Inspiration',
      count: 21,
    },

    {
      name: 'Health Care',
      count: 21,
    },
  ];

  recentpost = [
    {
      img: '/assets/Image/postboy.webp',
      name: 'From life was you fish...',
      date: 'January 12, 2019',
    },

    {
      img: '/assets/Image/postgirl.webp',
      name: 'The Amazing Hubble',
      date: '02 Hours ago',
    },

    {
      img: '/assets/Image/postshoes.webp',
      name: 'Astronomy Or Astrology',
      date: '03 Hours ago',
    },

    {
      img: '/assets/Image/postgallery.webp',
      name: 'Asteroids telescope',
      date: '01 Hours ago',
    },
  ];
}
