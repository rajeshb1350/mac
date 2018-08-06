import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotbookComponent } from './slotbook.component';

describe('SlotbookComponent', () => {
  let component: SlotbookComponent;
  let fixture: ComponentFixture<SlotbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
