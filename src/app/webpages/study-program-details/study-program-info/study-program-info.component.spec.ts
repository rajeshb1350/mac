import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyProgramInfoComponent } from './study-program-info.component';

describe('StudyProgramInfoComponent', () => {
  let component: StudyProgramInfoComponent;
  let fixture: ComponentFixture<StudyProgramInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyProgramInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyProgramInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
