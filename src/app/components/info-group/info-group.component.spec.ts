import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGroupComponent } from './info-group.component';

describe('InfoGroupComponent', () => {
  let component: InfoGroupComponent;
  let fixture: ComponentFixture<InfoGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
