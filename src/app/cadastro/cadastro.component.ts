import { Component, OnInit } from '@angular/core';
import { Dados } from '../alunodados';

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
    
  constructor() { }

  ngOnInit(): void {
  }

}
