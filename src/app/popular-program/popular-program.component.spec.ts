import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularProgramComponent } from './popular-program.component';

describe('PopularProgramComponent', () => {
  let component: PopularProgramComponent;
  let fixture: ComponentFixture<PopularProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularProgramComponent]
    });
    fixture = TestBed.createComponent(PopularProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
