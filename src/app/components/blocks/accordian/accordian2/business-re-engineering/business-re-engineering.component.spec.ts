import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessReEngineeringComponent } from './business-re-engineering.component';

describe('BusinessReEngineeringComponent', () => {
  let component: BusinessReEngineeringComponent;
  let fixture: ComponentFixture<BusinessReEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessReEngineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessReEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
