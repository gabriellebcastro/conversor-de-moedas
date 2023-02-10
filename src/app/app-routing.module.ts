import { HistoricoComponent } from './historico/historico.component';
import { ConversorComponent } from './conversor/conversor.component';
import { ListaComponent } from './lista/lista.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'conversor', component: ConversorComponent},
  {path: 'historico', component: HistoricoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
