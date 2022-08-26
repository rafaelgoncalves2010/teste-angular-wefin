import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitarEmprestimoComponent } from './solicitar-emprestimo.component';

const routes: Routes = [{path: '', component: SolicitarEmprestimoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitarEmprestimoRoutingModule { }
