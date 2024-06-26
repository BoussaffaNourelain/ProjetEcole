import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboredAdminComponent } from './dashbored-admin.component';

describe('DashboredAdminComponent', () => {
  let component: DashboredAdminComponent;
  let fixture: ComponentFixture<DashboredAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboredAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboredAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
