import { Component, Input, OnInit } from '@angular/core';
import { RetornoSimulacaoEmprestimo } from 'src/app/services/simulacao-emprestimo/retorno-simulacao-emprestimo';

@Component({
  selector: 'app-listar-simulacao',
  templateUrl: './listar-simulacao.component.html',
  styleUrls: ['./listar-simulacao.component.css']
})
export class ListarSimulacaoComponent implements OnInit {

  @Input() dataRetornada: RetornoSimulacaoEmprestimo;
  
  constructor() { }

  ngOnInit(): void {
  }

}


