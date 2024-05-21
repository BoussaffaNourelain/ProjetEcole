import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDevisComponent } from './info-devis.component';

describe('InfoDevisComponent', () => {
  let component: InfoDevisComponent;
  let fixture: ComponentFixture<InfoDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDevisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
