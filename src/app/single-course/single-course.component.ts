import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css'],
})
export class SingleCourseComponent {
  @Input() singledata = {
    img: '/assets/Image/2.png.webp',
    Feild: 'Agriculture',
    course: 'Chemical Engineering',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
  };
}
