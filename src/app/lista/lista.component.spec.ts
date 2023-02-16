import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaComponent } from './lista.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaComponent],
      imports: [
        HttpClientModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatTableModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter data correctly', () => {
    const testData = [
      { code: 'USD', description: 'US Dollar' },
      { code: 'EUR', description: 'Euro' },
      { code: 'JPY', description: 'Japanese Yen' },
    ];

    // Set test data as the data source
    component.moedas.data = testData;

    // Filter data with "USD"
    component.filterData({ target: { value: 'USD' } });

    // Verify that the filtered data only contains the "USD" row
    expect(component.moedas.filteredData.length).toEqual(1);
    expect(component.moedas.filteredData[0].code).toEqual('USD');
  });
});
