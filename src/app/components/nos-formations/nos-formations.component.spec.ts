import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosFormationsComponent } from './nos-formations.component';

describe('NosFormationsComponent', () => {
  let component: NosFormationsComponent;
  let fixture: ComponentFixture<NosFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosFormationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NosFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
