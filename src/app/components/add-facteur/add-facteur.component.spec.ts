import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFacteurComponent } from './add-facteur.component';

describe('AddFacteurComponent', () => {
  let component: AddFacteurComponent;
  let fixture: ComponentFixture<AddFacteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFacteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFacteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
