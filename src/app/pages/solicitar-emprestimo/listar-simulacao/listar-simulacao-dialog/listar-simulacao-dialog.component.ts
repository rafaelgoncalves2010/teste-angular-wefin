import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetornoSimulacaoEmprestimo } from 'src/app/services/simulacao-emprestimo/retorno-simulacao-emprestimo';

@Component({
  selector: 'app-listar-simulacao-dialog',
  templateUrl: './listar-simulacao-dialog.component.html',
  styleUrls: ['./listar-simulacao-dialog.component.css']
})
export class ListarSimulacaoDialogComponent implements OnInit {

  @Input() dataTogglelName : string;
  @Input() dataTargetName : string;
  @Input() dataRetornada : RetornoSimulacaoEmprestimo;

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  confirmarEmprestimo(){
    this.router.navigate(['/emprestimo-realizado']);
  }

}
