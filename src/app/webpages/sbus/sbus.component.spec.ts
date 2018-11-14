import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbusComponent } from './sbus.component';

describe('SbusComponent', () => {
  let component: SbusComponent;
  let fixture: ComponentFixture<SbusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
