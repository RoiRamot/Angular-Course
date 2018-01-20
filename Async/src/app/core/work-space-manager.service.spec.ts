import { TestBed, inject } from '@angular/core/testing';

import { WorkSpaceManagerService } from './work-space-manager.service';

describe('WorkSpaceManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkSpaceManagerService]
    });
  });

  it('should be created', inject([WorkSpaceManagerService], (service: WorkSpaceManagerService) => {
    expect(service).toBeTruthy();
  }));
});
