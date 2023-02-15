import { Convert } from './../models/convert.model';
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
  valorDolar!: number;
  resultado!: any;
  taxa: any;
  form: FormGroup;
  data!: Date;
  hora!: string;
  conversao!: Convert[];

  constructor(private currencyList: CurrencyListService) {
    this.form = new FormGroup({
      moedaOrigem: new FormControl(''),
      moedaDestino: new FormControl(''),
      valor: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.getItem()
    this.currencyList.list().subscribe((data) => {
      var resultado = Object.keys(data.symbols).map(function(moeda) {
        let symbols = data.symbols[moeda];
        return symbols;
      });
      this.moedas = resultado;
    });
  }

  saveConvert(){
    var conversao = {
      data: this.data,
      valor: this.valor,
      moedaOrigem: this.moedaOrigem,
      resultado: this.resultado,
      moedaDestino: this.moedaDestino,
      taxa: this.taxa,
      valorDolar: this.valorDolar
    };

    this.getItem();
    this.conversao.push(conversao);
    localStorage.setItem('conversao', JSON.stringify(this.conversao));
  }

  checkConvert(){
    this.currencyList.convert(this.moedaDestino, 'USD', this.resultado)
    .subscribe((data:any) => {
      this.valorDolar = data['result'];
      this.saveConvert();
    });
  }

  getItem() {
    this.conversao = JSON.parse(localStorage.getItem('conversao')!) || [];
  }

  convert() {
    this.currencyList.convert(this.moedaOrigem, this.moedaDestino, this.valor)
      .subscribe((data:any) => {
        this.data = new Date();
        this.resultado = data['result'];
        console.log(this.resultado);
        this.taxa = Object.values(data['info']);
        console.log(this.taxa);
        this.checkConvert();
      });
  }
}
