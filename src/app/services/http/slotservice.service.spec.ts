import { TestBed, inject } from '@angular/core/testing';

import { SlotserviceService } from './slotservice.service';

describe('SlotserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlotserviceService]
    });
  });

  it('should be created', inject([SlotserviceService], (service: SlotserviceService) => {
    expect(service).toBeTruthy();
  }));
});
