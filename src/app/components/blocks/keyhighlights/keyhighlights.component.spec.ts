import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyhighlightsComponent } from './keyhighlights.component';

describe('KeyhighlightsComponent', () => {
  let component: KeyhighlightsComponent;
  let fixture: ComponentFixture<KeyhighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyhighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyhighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
