import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceAccountServiceComponent } from './finance-account-service.component';

describe('FinanceAccountServiceComponent', () => {
  let component: FinanceAccountServiceComponent;
  let fixture: ComponentFixture<FinanceAccountServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceAccountServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceAccountServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
