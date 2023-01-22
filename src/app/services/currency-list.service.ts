import { Injectable } from '@angular/core';
import { Moeda } from '../models/moeda.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CurrencyListService {

  private listaMoedas: Moeda [];
  private url = 'https://api.exchangerate.host/symbols';

  constructor(private httpClient: HttpClient) {
    this.listaMoedas = [];
  }

  get moedas(){
    return this.listaMoedas;
  }

  todas(): Observable<Moeda[]>{
    return this.httpClient.get<Moeda[]>(this.url);
  }
}
