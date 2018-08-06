import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyProgramDescComponent } from './study-program-desc.component';

describe('StudyProgramDescComponent', () => {
  let component: StudyProgramDescComponent;
  let fixture: ComponentFixture<StudyProgramDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyProgramDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyProgramDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
