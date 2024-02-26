import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { BlogComponent } from './blog/blog.component';
import { EventComponent } from './event/event.component';
import { ContactComponent } from './contact/contact.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventAdmissionsComponent } from './event-admissions/event-admissions.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },

  {
    path: 'Home',
    component: HomeComponent,
  },

  {
    path: 'Courses',
    component: CoursesComponent,
  },

  {
    path: 'Blog',
    component: BlogComponent,
  },

  {
    path: 'SingleBlog',
    component: SingleBlogComponent,
  },

  {
    path: 'Event',
    children: [
      {
        path: '',
        component: EventComponent,
      },

      {
        path: 'EventDetails',
        component: EventDetailsComponent,
      },

      {
        path: 'Admissions',
        component: EventAdmissionsComponent,
      },
    ],
  },

  {
    path: 'Contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
