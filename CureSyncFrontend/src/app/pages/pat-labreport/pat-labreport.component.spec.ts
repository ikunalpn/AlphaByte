import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatLabreportComponent } from './pat-labreport.component';

describe('PatLabreportComponent', () => {
  let component: PatLabreportComponent;
  let fixture: ComponentFixture<PatLabreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatLabreportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatLabreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
