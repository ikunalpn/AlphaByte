import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatVaccineComponent } from './pat-vaccine.component';

describe('PatVaccineComponent', () => {
  let component: PatVaccineComponent;
  let fixture: ComponentFixture<PatVaccineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatVaccineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
