import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbusFirstComponent } from './sbus-first.component';

describe('SbusFirstComponent', () => {
  let component: SbusFirstComponent;
  let fixture: ComponentFixture<SbusFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbusFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbusFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
