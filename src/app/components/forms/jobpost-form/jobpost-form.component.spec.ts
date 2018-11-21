import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostFormComponent } from './jobpost-form.component';

describe('JobpostFormComponent', () => {
  let component: JobpostFormComponent;
  let fixture: ComponentFixture<JobpostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobpostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobpostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
