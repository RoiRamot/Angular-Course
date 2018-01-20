import { TestBed, inject } from '@angular/core/testing';

import { DataAccessorService } from './data-accessor.service';

describe('DataAccessorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataAccessorService]
    });
  });

  it('should be created', inject([DataAccessorService], (service: DataAccessorService) => {
    expect(service).toBeTruthy();
  }));
});
