import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationFormationComponent } from './affectation-formation.component';

describe('AffectationFormationComponent', () => {
  let component: AffectationFormationComponent;
  let fixture: ComponentFixture<AffectationFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffectationFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffectationFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
