import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFinancierComponent } from './edit-financier.component';

describe('EditFinancierComponent', () => {
  let component: EditFinancierComponent;
  let fixture: ComponentFixture<EditFinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFinancierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
