import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationFormationGroupComponent } from './affectation-formation-group.component';

describe('AffectationFormationGroupComponent', () => {
  let component: AffectationFormationGroupComponent;
  let fixture: ComponentFixture<AffectationFormationGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffectationFormationGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffectationFormationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
