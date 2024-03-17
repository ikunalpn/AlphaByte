import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatHealthStatComponent } from './pat-health-stat.component';

describe('PatHealthStatComponent', () => {
  let component: PatHealthStatComponent;
  let fixture: ComponentFixture<PatHealthStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatHealthStatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatHealthStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
