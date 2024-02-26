import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  footerdata = [
    {
      Name: 'About Us',
      online: 'Online Learning',
      data: 'About Us',
      career: 'Careers',
      centre: 'Press Center',
      instructor: 'Become an Instructor',
    },

    {
      Name: 'Campus',
      online: 'Our Plans',
      data: 'Free Trial',
      career: 'Academic Solutions',
      centre: 'Business Solutions',
      instructor: 'Government Solutions',
    },

    {
      Name: 'Study',
      online: 'Admissions Policy',
      data: ' Getting Started',
      career: 'Visa Information',
      centre: 'Tuition Calculator',
      instructor: 'Request Information',
    },

    {
      Name: 'Report',
      online: 'Support',
      data: 'Contact Us',
      career: 'System Requirements',
      centre: 'Register Activation Key',
      instructor: 'Site feedback',
    },
  ];
}
