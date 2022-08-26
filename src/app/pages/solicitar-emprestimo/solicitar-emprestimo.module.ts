import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitarEmprestimoComponent } from './solicitar-emprestimo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarSimulacaoComponent } from './listar-simulacao/listar-simulacao.component';
import { SolicitarEmprestimoRoutingModule } from './solicitar-emprestimo-routing.module';
import { ListarSimulacaoDialogComponent } from './listar-simulacao/listar-simulacao-dialog/listar-simulacao-dialog.component';
import { CustomSharedModule } from 'src/app/shared/custom-shared.module';
import { IMaskModule } from 'angular-imask';


@NgModule({
  declarations: [SolicitarEmprestimoComponent, ListarSimulacaoComponent, ListarSimulacaoDialogComponent],
  imports: [
    CommonModule,
    SolicitarEmprestimoRoutingModule,
    IMaskModule,
    CustomSharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SolicitarEmprestimoModule { }
