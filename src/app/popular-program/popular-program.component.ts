import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-program',
  templateUrl: './popular-program.component.html',
  styleUrls: ['./popular-program.component.css'],
})
export class PopularProgramComponent {
  singlecourse = ['Graduate', 'Postgraduate', 'PHD Scholarship', 'Training'];

  currentcourse = 'Graduate';
  suballdata: any;
  Courses: string | any[] | null | undefined;

  ngOnInit() {
    this.setcurrenttab('Graduate');
  }

  alldata = [
    {
      img: '/assets/Image/1.png.webp',
      Feild: 'Agriculture',
      course: 'Chemical Engineering',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      type: 'Graduate',
    },

    {
      img: '/assets/Image/2.png.webp',
      Feild: 'Agriculture',
      course: 'Chemical Engineering',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      type: 'Graduate',
    },

    {
      img: '/assets/Image/3.png.webp',
      Feild: 'Agriculture',
      course: 'Chemical Engineering',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      type: 'Graduate',
    },

    {
      img: '/assets/Image/istockphoto-1409722748-170667a.webp',
      Feild: 'Agriculture',
      course: 'Chemical Engineering',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      type: 'Postgraduate',
    },

    {
      img: '/assets/Image/istockphoto-1410950079-170667a.webp',
      Feild: 'Agriculture',
      course: 'Chemical Engineering',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      type: 'Postgraduate',
    },

    {
      img: '/assets/Image/istockphoto-1455755410-170667a.webp',
      Feild: 'Agriculture',
      course: 'Chemical Engineering',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      type: 'Postgraduate',
    },

    {
      img: '/assets/Image/istockphoto-1783743772-170667a.webp',
      Feild: 'Agriculture',
      course: 'Chemical Engineering',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      type: 'PHD Scholarship',
    },
    {
      img: '/assets/Image/training_schedule_powerpoint_ppt_template_bundles_slide01.webp',
      Feild: 'Agriculture',
      course: 'Chemical Engineering',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      type: 'PHD Scholarship',
    },

    {
      img: '/assets/Image/training-webinar-e-learning-skills-business-internet-technology-concept-training-webinar-e-learning-skills-business-internet-99211231.webp',
      Feild: 'Agriculture',
      course: 'Chemical Engineering',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      type: 'PHD Scholarship',
    },

    {
      img: '/assets/Image/postgraduate-program.jpg',
      Feild: 'Agriculture',
      course: 'Chemical Engineering',
      type: 'Training',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },

    {
      img: '/assets/Image/scholarship.jpg',
      Feild: 'Agriculture',
      course: 'Chemical Engineering',
      type: 'Training',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },

    {
      img: '/assets/Image/UK-Scholarships.jpg',
      Feild: 'Agriculture',
      course: 'Chemical Engineering',
      type: 'Training',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
  ];

  setcurrenttab(type: string) {
    this.currentcourse = type;
    console.log(type);
    this.suballdata = this.alldata.filter((data) => {
      // console.log(data.Feild == type);
      return data.type.includes(type);
    });
    console.log(this.suballdata);
  }
}
