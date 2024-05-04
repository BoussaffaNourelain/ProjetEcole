import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboredFinancialComponent } from './dashbored-financial.component';

describe('DashboredFinancialComponent', () => {
  let component: DashboredFinancialComponent;
  let fixture: ComponentFixture<DashboredFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboredFinancialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboredFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
