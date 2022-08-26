import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulacaoEmprestimoProcessadaComponent } from './components/simulacao-emprestimo-processada/simulacao-emprestimo-processada.component';


@NgModule({
  declarations: [ SimulacaoEmprestimoProcessadaComponent],
  imports: [
    CommonModule,
  ],
  exports: [SimulacaoEmprestimoProcessadaComponent ]
})
export class CustomSharedModule { }
