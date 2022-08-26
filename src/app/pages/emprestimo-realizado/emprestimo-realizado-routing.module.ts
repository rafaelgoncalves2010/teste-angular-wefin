import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmprestimoRealizadoComponent } from './emprestimo-realizado.component';


const routes: Routes = [{path: '', component: EmprestimoRealizadoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmprestimoRealizadoRoutingModule { }
