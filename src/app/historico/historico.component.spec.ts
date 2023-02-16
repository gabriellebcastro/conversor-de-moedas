/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoricoComponent } from './historico.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Convert } from '../models/convert.model';
import { of } from 'rxjs';

describe('HistoricoComponent', () => {
  let component: HistoricoComponent;
  let fixture: ComponentFixture<HistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricoComponent],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatTableModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatSelectModule,
        FormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete a conversion correctly', () => {
    //Cria uma conversão falsa para ser deletada
    const conversao: Convert = {
      data: new Date(),
      valor: 100,
      moedaOrigem: 'USD',
      resultado: 500,
      moedaDestino: 'BRL',
      taxa: 5,
    };

    //Define o valor da variável "dataSource"
    component.dataSource.data = [conversao];

    //Simula o clique no botão de excluir a conversão
    const matDialogRef = jasmine.createSpyObj('MatDialogRef', [
      'afterClosed',
      'close',
    ]);
    matDialogRef.afterClosed.and.returnValue(of(true));
    spyOn(component.dialog, 'open').and.returnValue(matDialogRef);
    spyOn(component, 'deletar').and.callThrough();
    fixture.detectChanges();

    setTimeout(() => {
      const button = fixture.nativeElement.querySelector('#delete-button');
      if (button) {
        button.click();

        //Verifica se a conversão foi removida da lista
        expect(component.dataSource.data).not.toContain(conversao);

        //Verifica se a função "localStorage.setItem()" foi chamada com os parâmetros corretos
        expect(localStorage.setItem).toHaveBeenCalledWith(
          'conversao',
          JSON.stringify([])
        );

        //Verifica se a função "location.reload()" foi chamada
        expect(location.reload).toHaveBeenCalled();
      } else {
        fail('Botão de exclusão não encontrado');
      }
    }, 1000);
  });
});
