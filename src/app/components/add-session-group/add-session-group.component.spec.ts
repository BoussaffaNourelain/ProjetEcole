import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSessionGroupComponent } from './add-session-group.component';

describe('AddSessionGroupComponent', () => {
  let component: AddSessionGroupComponent;
  let fixture: ComponentFixture<AddSessionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSessionGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSessionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
