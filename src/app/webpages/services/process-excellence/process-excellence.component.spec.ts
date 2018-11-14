import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessExcellenceComponent } from './process-excellence.component';

describe('ProcessExcellenceComponent', () => {
  let component: ProcessExcellenceComponent;
  let fixture: ComponentFixture<ProcessExcellenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessExcellenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessExcellenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
