import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EGovernenceComponent } from './e-governence.component';

describe('EGovernenceComponent', () => {
  let component: EGovernenceComponent;
  let fixture: ComponentFixture<EGovernenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EGovernenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EGovernenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
