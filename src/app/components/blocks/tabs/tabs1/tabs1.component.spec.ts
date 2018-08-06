import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabs1Component } from './tabs1.component';

describe('Tabs1Component', () => {
  let component: Tabs1Component;
  let fixture: ComponentFixture<Tabs1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabs1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
