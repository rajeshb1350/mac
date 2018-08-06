import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassFormComponent } from './forgot-pass-form.component';

describe('ForgotPassFormComponent', () => {
  let component: ForgotPassFormComponent;
  let fixture: ComponentFixture<ForgotPassFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPassFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
