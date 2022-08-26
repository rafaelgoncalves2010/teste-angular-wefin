import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmprestimoRealizadoRoutingModule } from './emprestimo-realizado-routing.module';
import { EmprestimoRealizadoComponent } from './emprestimo-realizado.component';
import { CustomSharedModule } from 'src/app/shared/custom-shared.module';


@NgModule({
  declarations: [EmprestimoRealizadoComponent],
  imports: [
    CommonModule,
    EmprestimoRealizadoRoutingModule,
    CustomSharedModule
  ]
})
export class EmprestimoRealizadoModule { }
