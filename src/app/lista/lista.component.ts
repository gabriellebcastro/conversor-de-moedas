import { Moeda } from './../models/moeda.model';
import { CurrencyListService } from './../services/currency-list.service';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  moedas = new MatTableDataSource<Moeda>([]);
  //Moeda[] = [];
  displayedColumns = ['symbol', 'description'];

  constructor (private CurrencyListService: CurrencyListService){}

  ngOnInit(){
    //this.CurrencyListService.list().subscribe(console.log);
    //this.CurrencyListService.list().subscribe(dados => this.moedas = dados);
    this.CurrencyListService.list().subscribe(dados => {
      this.moedas.data = Object.values(dados);
      console.log(dados);
    })
  }
}
