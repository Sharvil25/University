import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { BlogComponent } from './blog/blog.component';
import { EventComponent } from './event/event.component';
import { ContactComponent } from './contact/contact.component';
import { PopularProgramComponent } from './popular-program/popular-program.component';
import { SingleCourseComponent } from './single-course/single-course.component';
import { LatestCoursesComponent } from './latest-courses/latest-courses.component';
import { RecenteventComponent } from './recentevent/recentevent.component';
import { ApplyAdmissionComponent } from './apply-admission/apply-admission.component';
import { RecentNewsComponent } from './recent-news/recent-news.component';
import { FooterComponent } from './footer/footer.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventAdmissionsComponent } from './event-admissions/event-admissions.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CoursesComponent,
    BlogComponent,
    EventComponent,
    ContactComponent,
    PopularProgramComponent,
    SingleCourseComponent,
    LatestCoursesComponent,
    RecenteventComponent,
    ApplyAdmissionComponent,
    RecentNewsComponent,
    FooterComponent,
    BackgroundImageComponent,
    EventDetailsComponent,
    EventAdmissionsComponent,
    SingleBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
