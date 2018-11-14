import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhymactecComponent } from './whymactec.component';

describe('WhymactecComponent', () => {
  let component: WhymactecComponent;
  let fixture: ComponentFixture<WhymactecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhymactecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhymactecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
