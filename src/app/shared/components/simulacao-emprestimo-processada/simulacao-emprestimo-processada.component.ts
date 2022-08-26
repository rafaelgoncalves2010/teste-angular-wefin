import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RetornoSimulacaoEmprestimo } from 'src/app/services/simulacao-emprestimo/retorno-simulacao-emprestimo';

@Component({
  selector: 'app-simulacao-emprestimo-processada',
  templateUrl: './simulacao-emprestimo-processada.component.html',
  styleUrls: ['./simulacao-emprestimo-processada.component.css']
})
export class SimulacaoEmprestimoProcessadaComponent implements OnInit {

  @Input() titulo : string;
  @Input() dataRetornada : RetornoSimulacaoEmprestimo;

  constructor() { }

  ngOnInit(): void {
  }

}
