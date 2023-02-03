import { Injectable } from '@angular/core';
import { Moeda } from '../models/moeda.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CurrencyListService {

  private readonly url = 'https://api.exchangerate.host/symbols';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<any>{
    return this.httpClient.get<any>(this.url);
  }
}
