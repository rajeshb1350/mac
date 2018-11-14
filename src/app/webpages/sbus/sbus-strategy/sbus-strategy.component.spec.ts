import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbusStrategyComponent } from './sbus-strategy.component';

describe('SbusStrategyComponent', () => {
  let component: SbusStrategyComponent;
  let fixture: ComponentFixture<SbusStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbusStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbusStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
