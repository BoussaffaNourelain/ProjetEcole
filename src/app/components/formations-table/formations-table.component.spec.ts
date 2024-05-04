import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsTableComponent } from './formations-table.component';

describe('FormationsTableComponent', () => {
  let component: FormationsTableComponent;
  let fixture: ComponentFixture<FormationsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
