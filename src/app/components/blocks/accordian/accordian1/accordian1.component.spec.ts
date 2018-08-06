import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Accordian1Component } from './accordian1.component';

describe('Accordian1Component', () => {
  let component: Accordian1Component;
  let fixture: ComponentFixture<Accordian1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accordian1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Accordian1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
