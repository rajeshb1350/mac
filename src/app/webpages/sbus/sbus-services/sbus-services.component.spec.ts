import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbusServicesComponent } from './sbus-services.component';

describe('SbusServicesComponent', () => {
  let component: SbusServicesComponent;
  let fixture: ComponentFixture<SbusServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbusServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbusServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
