import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyAdmissionComponent } from './apply-admission.component';

describe('ApplyAdmissionComponent', () => {
  let component: ApplyAdmissionComponent;
  let fixture: ComponentFixture<ApplyAdmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyAdmissionComponent]
    });
    fixture = TestBed.createComponent(ApplyAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
