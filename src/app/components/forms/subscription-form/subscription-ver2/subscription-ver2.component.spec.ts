import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionVer2Component } from './subscription-ver2.component';

describe('SubscriptionVer2Component', () => {
  let component: SubscriptionVer2Component;
  let fixture: ComponentFixture<SubscriptionVer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionVer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionVer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
