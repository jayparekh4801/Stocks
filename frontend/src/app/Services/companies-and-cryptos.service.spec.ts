import { TestBed } from '@angular/core/testing';

import { CompaniesAndCryptosService } from './companies-and-cryptos.service';

describe('CompaniesAndCryptosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompaniesAndCryptosService = TestBed.get(CompaniesAndCryptosService);
    expect(service).toBeTruthy();
  });
});
