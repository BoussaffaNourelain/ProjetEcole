import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormationGroupComponent } from './add-formation-group.component';

describe('AddFormationGroupComponent', () => {
  let component: AddFormationGroupComponent;
  let fixture: ComponentFixture<AddFormationGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFormationGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFormationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
