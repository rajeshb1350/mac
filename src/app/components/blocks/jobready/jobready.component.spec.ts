import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobreadyComponent } from './jobready.component';

describe('JobreadyComponent', () => {
  let component: JobreadyComponent;
  let fixture: ComponentFixture<JobreadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobreadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobreadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
