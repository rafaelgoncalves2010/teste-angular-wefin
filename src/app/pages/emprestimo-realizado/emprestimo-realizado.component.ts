import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RetornoSimulacaoEmprestimo } from 'src/app/services/simulacao-emprestimo/retorno-simulacao-emprestimo';
import { SimulacaoEmprestimoService } from 'src/app/services/simulacao-emprestimo/simulacao-emprestimo.service';

@Component({
  selector: 'app-emprestimo-realizado',
  templateUrl: './emprestimo-realizado.component.html',
  styleUrls: ['./emprestimo-realizado.component.css']
})
export class EmprestimoRealizadoComponent implements OnInit {

  dataRetornada : RetornoSimulacaoEmprestimo;

  constructor(private simulacaoRetornoService: SimulacaoEmprestimoService) { }

  ngOnInit(): void {
    this.dataRetornada = this.simulacaoRetornoService.retornoEmpretimo();
  }
}
