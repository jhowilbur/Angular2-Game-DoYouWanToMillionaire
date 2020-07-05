import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {

  @Input() nomeVindo;

  constructor() { }

  ngOnInit(): void {
  }

  contador = 1;
  dinheiro = 0;
  nome = this.nomeVindo;

  clickCerto() {
    this.contador++;
    if (this.dinheiro <= 0) {
      this.dinheiro = 2000000;
    } else {
      this.dinheiro = this.dinheiro + 2000000
    }
  }

  clickErrado() {
    this.contador = -2;
    this.dinheiro = 0;
  }

  clickContinuar() {
    this.contador++;
  }

  clickFinal() {
    this.contador = -1;
    if (this.dinheiro <= 0) {
      this.dinheiro = 2000000;
    } else {
      this.dinheiro = this.dinheiro + 2000000
    }
  }



}
