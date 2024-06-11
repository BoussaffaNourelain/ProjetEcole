import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationFormateurComponent } from './affectation-formateur.component';

describe('AffectationFormateurComponent', () => {
  let component: AffectationFormateurComponent;
  let fixture: ComponentFixture<AffectationFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffectationFormateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffectationFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
