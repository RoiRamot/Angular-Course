import { TestBed, inject } from '@angular/core/testing';

import { LocaliztionService } from './localiztion.service';

describe('LocaliztionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocaliztionService]
    });
  });

  it('should be created', inject([LocaliztionService], (service: LocaliztionService) => {
    expect(service).toBeTruthy();
  }));
});
