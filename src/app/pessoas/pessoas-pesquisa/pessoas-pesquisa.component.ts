import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    { nome: 'Paulo Corrêa', cidade: 'São Paulo', estado: 'SP', ativo: true},
    { nome: 'Ana Beatriz', cidade: 'São Paulo', estado: 'SP', ativo: true},
    { nome: 'Iara Corrêa', cidade: 'Belo Horizonte', estado: 'MG', ativo: false},
    { nome: 'Neide do Santos', cidade: 'Manaus', estado: 'AM', ativo: true},
    { nome: 'José Maria', cidade: 'Goias', estado: 'GO', ativo: false},
    { nome: 'Cleide Silva', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: true},
    { nome: 'Maria Souza', cidade: 'Tocatins', estado: 'TO', ativo: true},
    { nome: 'Jorge Gonçalves', cidade: 'Rio Grande do Sul', estado: 'RS', ativo: false},
    { nome: 'Miqueias Alonso', cidade: 'Muzambinho', estado: 'MG', ativo: true},
    { nome: 'Joarez Marcondes', cidade: 'Bahia', estado: 'BA', ativo: true},
    { nome: 'Genivaldo Lopes', cidade: 'Fortaleza', estado: 'CE', ativo: true},
    { nome: 'Margarete Domingues', cidade: 'Campo Grande', estado: 'MS', ativo: false},
  ];
}
