import { TestBed } from '@angular/core/testing';

import { GimmegimmeService } from './gimmegimme.service';

describe('GimmegimmeService', () => {
  let service: GimmegimmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GimmegimmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
