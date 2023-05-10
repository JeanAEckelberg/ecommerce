import { TestBed } from '@angular/core/testing';

import { TempDataServiceService } from './temp-data-service.service';

describe('TempDataServiceService', () => {
  let service: TempDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
