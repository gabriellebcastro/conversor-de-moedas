/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrencyListService } from './currency-list.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: CurrencyList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyListService],
      imports: [HttpClientModule]
    });
  });

  it('should ...', inject([CurrencyListService], (service: CurrencyListService) => {
    expect(service).toBeTruthy();
  }));
});
