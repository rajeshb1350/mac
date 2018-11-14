import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalExcellenceComponent } from './operational-excellence.component';

describe('OperationalExcellenceComponent', () => {
  let component: OperationalExcellenceComponent;
  let fixture: ComponentFixture<OperationalExcellenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationalExcellenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalExcellenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
