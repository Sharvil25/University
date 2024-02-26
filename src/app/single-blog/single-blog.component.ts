import { Component } from '@angular/core';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css'],
})
export class SingleBlogComponent {
  comments = [
    {
      img: '/assets/Image/spakes.webp',
      para: 'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
      name: 'Emilly Blunt',
      month: 'December 4, 2017 at 3:12 pm',
      rply: 'REPLY',
    },

    {
      img: '/assets/Image/hair.webp',
      para: 'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
      name: 'Emilly Blunt',
      month: 'December 4, 2017 at 3:12 pm',
      rply: 'REPLY',
    },

    {
      img: '/assets/Image/beard.webp',
      para: 'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
      name: 'Emilly Blunt',
      month: 'December 4, 2017 at 3:12 pm',
      rply: 'REPLY',
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
