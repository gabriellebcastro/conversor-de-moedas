import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CurrencyListService } from './../services/currency-list.service';
import { Convert } from '../models/convert.model';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})

export class HistoricoComponent implements OnInit {

  constructor(private currencyList: CurrencyListService, public dialog: MatDialog) {}

  displayedColumns = [
    'data',
    'valor',
    'moedaOrigem',
    'resultado',
    'moedaDestino',
    'taxa'
  ];
  dataSource = new MatTableDataSource<Convert>();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngOnInit() {
    const conversionsString = localStorage.getItem('conversao');
    this.dataSource.data = conversionsString ? JSON.parse(conversionsString) : [];
    this.dataSource.sort = this.sort;
  }

}
