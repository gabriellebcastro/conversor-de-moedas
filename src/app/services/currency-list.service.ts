import { Injectable } from '@angular/core';
import { Moeda } from '../models/moeda.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CurrencyListService {

  private url = 'https://api.exchangerate.host/symbols';

  constructor(private httpClient: HttpClient) {}

  todas(): Observable<Moeda[]>{
    return this.httpClient.get<Moeda[]>(this.url);
  }
}
