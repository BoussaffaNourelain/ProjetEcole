import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectionGroupComponent } from './affection-group.component';

describe('AffectionGroupComponent', () => {
  let component: AffectionGroupComponent;
  let fixture: ComponentFixture<AffectionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffectionGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffectionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
