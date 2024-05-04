import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboredStaffAdComponent } from './dashbored-staff-ad.component';

describe('DashboredStaffAdComponent', () => {
  let component: DashboredStaffAdComponent;
  let fixture: ComponentFixture<DashboredStaffAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboredStaffAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboredStaffAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
