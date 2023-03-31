import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComoponentComponent } from './primeiro-componente/primeiro-component.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipeCostomizadoComponent } from './pipe-costomizado/pipe-costomizado.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { ExServicos1Component } from './ex-servicos1/ex-servicos1.component';
import { ExServicos2Component } from './ex-servicos2/ex-servicos2.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComoponentComponent,
    SegundoComponenteComponent,
    MultiplicaPorPipe,
    PipeCostomizadoComponent,
    TwoWayDataBindingComponent,
    RenderizandoListasComponent,
    ComponentePersonalizadoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ExServicos1Component,
    ExServicos2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
