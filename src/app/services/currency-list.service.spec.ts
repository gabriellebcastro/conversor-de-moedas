/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrencyListService } from './currency-list.service';

describe('Service: CurrencyList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyListService]
    });
  });

  it('should ...', inject([CurrencyListService], (service: CurrencyListService) => {
    expect(service).toBeTruthy();
  }));
});
