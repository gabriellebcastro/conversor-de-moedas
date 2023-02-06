import { Component, OnInit, ViewChild, Injectable} from '@angular/core';
import { NgForm } from '@angular/forms';
import { CurrencyListService } from './../services/currency-list.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})

export class ConversorComponent implements OnInit{
  moedas: any[] = [];
  moedaOrigem!: string;
  moedaDestino!: string;
  valor!: number;
  resultado!: any;
  taxa: any;
  form: FormGroup;

  constructor(private currencyList: CurrencyListService) {
    this.form = new FormGroup({
      moedaOrigem: new FormControl(''),
      moedaDestino: new FormControl(''),
      valor: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.currencyList.list().subscribe((data) => {
      var resultado = Object.keys(data.symbols).map(function(moeda) {
        let symbols = data.symbols[moeda];
        return symbols;
      });
      this.moedas = resultado;
    });
  }

 convert() {
    this.currencyList.convert(this.moedaOrigem, this.moedaDestino, this.valor)
      .subscribe((data:any) => {
        this.resultado = data['result'];
        console.log(this.resultado);
        this.taxa = Object.values(data['info']);
        console.log(this.taxa);
      });
  }
}
