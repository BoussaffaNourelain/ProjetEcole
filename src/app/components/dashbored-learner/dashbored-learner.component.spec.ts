import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboredLearnerComponent } from './dashbored-learner.component';

describe('DashboredLearnerComponent', () => {
  let component: DashboredLearnerComponent;
  let fixture: ComponentFixture<DashboredLearnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboredLearnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboredLearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
