import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-ex-servicos2',
  templateUrl: './ex-servicos2.component.html',
  styleUrls: ['./ex-servicos2.component.css']
})
export class ExServicos2Component {
  descricao = "";

  constructor(public logger: LoggerService){}

  addProduto(){
    this.logger.logar(`O nome do produto ${this.descricao} foi adicionado`)
  }
  //ou
  // addProduto(){
  //   console.log(`O nome do produto ${this.descricao} foi adicionado`)
  // }
}
