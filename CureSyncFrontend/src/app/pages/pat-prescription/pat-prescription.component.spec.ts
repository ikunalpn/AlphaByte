import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatPrescriptionComponent } from './pat-prescription.component';

describe('PatPrescriptionComponent', () => {
  let component: PatPrescriptionComponent;
  let fixture: ComponentFixture<PatPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatPrescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
