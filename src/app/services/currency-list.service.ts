import { Injectable } from '@angular/core';
import { Moeda } from '../models/moeda.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CurrencyListService {

  private readonly url1 = 'https://api.exchangerate.host/symbols';
  private readonly url2 = 'http://api.exchangerate.host';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<any>{
    return this.httpClient.get<any>(this.url1);
  }

  convert(moedaOrigem: string, moedaDestino: string, valor: number) {
    const url = `${this.url2}/convert?from=${moedaOrigem}&to=${moedaDestino}&amount=${valor}`;
    return this.httpClient.get(url);
  }
}
