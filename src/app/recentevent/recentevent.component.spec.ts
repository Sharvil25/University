import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenteventComponent } from './recentevent.component';

describe('RecenteventComponent', () => {
  let component: RecenteventComponent;
  let fixture: ComponentFixture<RecenteventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecenteventComponent]
    });
    fixture = TestBed.createComponent(RecenteventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
