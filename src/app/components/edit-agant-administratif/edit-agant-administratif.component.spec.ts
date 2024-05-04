import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgantAdministratifComponent } from './edit-agant-administratif.component';

describe('EditAgantAdministratifComponent', () => {
  let component: EditAgantAdministratifComponent;
  let fixture: ComponentFixture<EditAgantAdministratifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAgantAdministratifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAgantAdministratifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
