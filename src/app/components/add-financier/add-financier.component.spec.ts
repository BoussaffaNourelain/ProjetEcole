import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFinancierComponent } from './add-financier.component';

describe('AddFinancierComponent', () => {
  let component: AddFinancierComponent;
  let fixture: ComponentFixture<AddFinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFinancierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
