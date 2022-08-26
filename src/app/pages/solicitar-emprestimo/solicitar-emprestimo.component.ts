import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { RetornoSimulacaoEmprestimo } from 'src/app/services/simulacao-emprestimo/retorno-simulacao-emprestimo';
import { SimulacaoEmprestimoService } from 'src/app/services/simulacao-emprestimo/simulacao-emprestimo.service';

@Component({
  selector: 'app-solicitar-emprestimo',
  templateUrl: './solicitar-emprestimo.component.html',
  styleUrls: ['./solicitar-emprestimo.component.css']
})
export class SolicitarEmprestimoComponent implements OnInit {

  solicitacaoEmprestimoForm: FormGroup;
  submeterAcaoForm: Boolean;
  dataRetornada: RetornoSimulacaoEmprestimo;

  imaskConfig = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '',
    padFractionalZeros: true,
    normalizeZeros: true,
    raix: ','
  }

  constructor(
    private formBuilder: FormBuilder,
    private simulacaoEmprestimoService: SimulacaoEmprestimoService
    ) {
     }

  ngOnInit(): void {
    this.submeterAcaoForm = false;
    this.gerarFormulario();
  }

  gerarFormulario(): void {
    this.solicitacaoEmprestimoForm = this.formBuilder.group({
      nomeSolicitante: [null,[Validators.required]],
      valorDesejado: [null,[Validators.required]],
      numeroParcelas: [null,[Validators.required]],
    });
  }

  simularEmprestimo(){
    this.submeterAcaoForm = true;
    const {nomeSolicitante,valorDesejado,numeroParcelas} = this.solicitacaoEmprestimoForm.value;

    if(!this.solicitacaoEmprestimoForm.invalid){
      this.dataRetornada = this.simulacaoEmprestimoService.simularEmprestimo(nomeSolicitante,parseInt(valorDesejado),numeroParcelas);
    }
  }
}
