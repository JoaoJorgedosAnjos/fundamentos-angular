import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-ex-servicos1',
  templateUrl: './ex-servicos1.component.html',
  styleUrls: ['./ex-servicos1.component.css']
})
export class ExServicos1Component {
  nome = "";

  constructor(private logger: LoggerService) {
    
  }

  addNome(){
    this.logger.logar(`O nome ${this.nome} foi adicionado`)
  }
}
