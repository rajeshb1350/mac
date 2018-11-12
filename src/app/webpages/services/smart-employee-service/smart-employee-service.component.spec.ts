import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartEmployeeServiceComponent } from './smart-employee-service.component';

describe('SmartEmployeeServiceComponent', () => {
  let component: SmartEmployeeServiceComponent;
  let fixture: ComponentFixture<SmartEmployeeServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartEmployeeServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartEmployeeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
