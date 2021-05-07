import { Component, OnInit } from '@angular/core';
import { Dados } from '../alunodados';
import { CADASTROS } from '../mock-estudante';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  alunodados: Dados = {
    nome: 'digite seu nome',
    RA: 0,
    idade: 0,
    sexo: 'masculino',
    turma: 'nome do curso'
  };

  cadastros = CADASTROS;
    
  constructor() { }

  ngOnInit(): void {
  }
  selectedDados: Dados;
  onSelect(alunodados: Dados): void {
    this.selectedDados = alunodados;
  }
}
