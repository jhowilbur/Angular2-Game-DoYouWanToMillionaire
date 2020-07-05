import { Component, OnInit } from '@angular/core';

declare var swal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  nome = '';
  onKeyNome(value: string) {
    this.nome = value;
  }

  confirma = 0;

  entrar(nome) {
    this.nome = nome;
    if (this.nome != '') {
      swal(
        'SHOW!',
        'VAMOS JOGAR!',
        'success'
      )
      /*Liberar rota para as perguntas*/
      this.confirma = 10;
    } else {
      swal(
        'OPS!',
        'Digite um NOME!',
        'error'
      )
    }

    //IMPLEMENTAR QUANDO TIVER SISTEMA DE EMAIL
    /*
      email = '';
      onKeyEmail(value: string) {
        this.email = value;
      }
    
      entrar(nome) {
        this.nome = nome;
        if (this.email != '' && this.nome != '') {
          swal(
            'SHOW!',
            'VAMOS JOGAR!',
            'success'
          )
          Liberar rota para as perguntas
          this.confirma = 10;
        } else {
          swal(
            'OPS!',
            'Digite um NOME e E-MAIL!',
            'error'
          )
        }
    */

  }

}
