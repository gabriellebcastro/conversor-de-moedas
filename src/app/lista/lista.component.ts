import { Moeda } from './../models/moeda.model';
import { CurrencyListService } from './../services/currency-list.service';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent {
  moedas = new MatTableDataSource<any>([]);
  displayedColumns = ['symbols', 'description'];

  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};
  @ViewChild(MatSort) sort: MatSort = <MatSort>{};

  constructor (private CurrencyListService: CurrencyListService){}

  ngOnInit(){
    this.CurrencyListService.list().subscribe(dados => {
      this.moedas = new MatTableDataSource(Object.values(dados.symbols));
      this.moedas.paginator = this.paginator;
      console.log(Object.values(dados.symbols));
    })
  }
}
