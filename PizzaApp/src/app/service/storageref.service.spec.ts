import { TestBed } from '@angular/core/testing';

import { StoragerefService } from './storageref.service';

describe('StoragerefService', () => {
  let service: StoragerefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoragerefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
