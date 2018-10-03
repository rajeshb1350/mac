import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyConsultingServiceComponent } from './technology-consulting-service.component';

describe('TechnologyConsultingServiceComponent', () => {
  let component: TechnologyConsultingServiceComponent;
  let fixture: ComponentFixture<TechnologyConsultingServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyConsultingServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyConsultingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
