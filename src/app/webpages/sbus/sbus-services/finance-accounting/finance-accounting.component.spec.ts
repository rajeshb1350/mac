import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceAccountingComponent } from './finance-accounting.component';

describe('FinanceAccountingComponent', () => {
  let component: FinanceAccountingComponent;
  let fixture: ComponentFixture<FinanceAccountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceAccountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
