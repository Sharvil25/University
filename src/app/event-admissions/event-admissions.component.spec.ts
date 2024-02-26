import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAdmissionsComponent } from './event-admissions.component';

describe('EventAdmissionsComponent', () => {
  let component: EventAdmissionsComponent;
  let fixture: ComponentFixture<EventAdmissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventAdmissionsComponent]
    });
    fixture = TestBed.createComponent(EventAdmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
