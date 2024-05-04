import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboredTrainerComponent } from './dashbored-trainer.component';

describe('DashboredTrainerComponent', () => {
  let component: DashboredTrainerComponent;
  let fixture: ComponentFixture<DashboredTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboredTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboredTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
