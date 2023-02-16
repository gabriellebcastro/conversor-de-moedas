import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversorComponent } from './conversor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CurrencyListService } from './../services/currency-list.service';
import { of } from 'rxjs';

describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversorComponent],
      imports: [
        HttpClientTestingModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatTableModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatSelectModule,
        FormsModule
      ],
      providers: [CurrencyListService]
    }).compileComponents();

    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  let currencyList: CurrencyListService;

  beforeEach(() => {
    currencyList = TestBed.inject(CurrencyListService);
    spyOn(currencyList, 'convert').and.returnValue(of({ result: 100, info: { rate: 2 } }));
    component = new ConversorComponent(currencyList);
    component.moedaOrigem = 'USD';
    component.moedaDestino = 'BRL';
    component.valor = 50;
  });

  it('should convert currency', () => {
    component.convert();
    expect(component.data).toEqual(jasmine.any(Date));
    expect(component.resultado).toEqual(100);
    expect(component.taxa).toEqual([2]);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
