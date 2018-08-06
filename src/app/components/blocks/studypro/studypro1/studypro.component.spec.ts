import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyproComponent } from './studypro.component';

describe('StudyproComponent', () => {
  let component: StudyproComponent;
  let fixture: ComponentFixture<StudyproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
