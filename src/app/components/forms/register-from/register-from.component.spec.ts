import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFromComponent } from './register-from.component';

describe('RegisterFromComponent', () => {
  let component: RegisterFromComponent;
  let fixture: ComponentFixture<RegisterFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
