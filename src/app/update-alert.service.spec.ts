import { TestBed } from '@angular/core/testing';

import { UpdateAlertService } from './update-alert.service';

describe('UpdateAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateAlertService = TestBed.get(UpdateAlertService);
    expect(service).toBeTruthy();
  });
});
