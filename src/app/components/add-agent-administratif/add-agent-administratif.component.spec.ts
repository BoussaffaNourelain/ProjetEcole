import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgentAdministratifComponent } from './add-agent-administratif.component';

describe('AddAgentAdministratifComponent', () => {
  let component: AddAgentAdministratifComponent;
  let fixture: ComponentFixture<AddAgentAdministratifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAgentAdministratifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAgentAdministratifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
