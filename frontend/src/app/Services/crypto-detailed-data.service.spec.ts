import { TestBed } from '@angular/core/testing';

import { CryptoDetailedDataService } from './crypto-detailed-data.service';

describe('CryptoDetailedDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CryptoDetailedDataService = TestBed.get(CryptoDetailedDataService);
    expect(service).toBeTruthy();
  });
});
