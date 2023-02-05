import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ConvertCurrencyService {
  private readonly api_url = 'http://api.exchangerate.host';

constructor(private httpClient: HttpClient) {}

convert(moedaOrigem: string, moedaDestino: string, valor: number) {
  const url = `${this.api_url}/convert?from=${moedaOrigem}&to=${moedaDestino}&amount=${valor}`;
  return this.httpClient.get(url);
}
}
