import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyProgramCarouselComponent } from './study-program-carousel.component';

describe('StudyProgramCarouselComponent', () => {
  let component: StudyProgramCarouselComponent;
  let fixture: ComponentFixture<StudyProgramCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyProgramCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyProgramCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
