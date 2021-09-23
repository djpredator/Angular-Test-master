import { TestBed } from '@angular/core/testing';

import { AreaAlertService } from './area-alert.service';

describe('AreaAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreaAlertService = TestBed.get(AreaAlertService);
    expect(service).toBeTruthy();
  });
});
