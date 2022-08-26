import { Injectable } from '@angular/core';
import { RetornoSimulacaoEmprestimo } from './retorno-simulacao-emprestimo';

@Injectable({
    providedIn: 'root'
})
export class SimulacaoEmprestimoService {

    private readonly taxaJuros: number = 0.05;
    retornoSimulacaoData: RetornoSimulacaoEmprestimo;
    constructor() { }

    //Como se fosse o post
    public simularEmprestimo(nomeSolicitante:string,valorDesejado: number, numeroParcelas: number): RetornoSimulacaoEmprestimo {
        let valorTotal = valorDesejado * Math.pow((1 + this.taxaJuros), numeroParcelas);
        let valorParcelas = valorTotal / numeroParcelas;

        this.retornoSimulacaoData = {
            nomeSolicitante,
            valorTotal,
            valorParcelas,
            numeroParcelas
        };
        return this.retornoSimulacaoData;
    }

    
    //Como se fosse o get
    public retornoEmpretimo(): RetornoSimulacaoEmprestimo {
        return this.retornoSimulacaoData;

    }
}
