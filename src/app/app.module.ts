import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaquinasVirtualesComponent } from './components/maquinas-virtuales/maquinas-virtuales.component';
import { MaquinasVirtualesService } from './services/maquinas-virtuales.service';
import { HttpClientModule } from '@angular/common/http';
import { AddMaquinaVirtualComponent } from './components/add-maquina-virtual/add-maquina-virtual.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LaboratoriosComponent } from './components/laboratorios/laboratorios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaneldocentesComponent } from './components/paneldocentes/paneldocentes.component';
import { AddRequerimientoComponent } from './components/add-requerimiento/add-requerimiento.component';
import { AddLaboratorioComponent } from './components/add-laboratorio/add-laboratorio.component';
import { VerLaboratorioComponent } from './components/ver-laboratorio/ver-laboratorio.component';
import { CardComponent } from './components/card/card.component';
import { MisRequerimientosComponent } from './components/mis-requerimientos/mis-requerimientos.component';
import { AddComputadoraComponent } from './components/add-computadora/add-computadora.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaquinasVirtualesComponent,
    AddMaquinaVirtualComponent,
    LoginComponent,
    ModalContentComponent,
    FooterComponent,
    PaneldocentesComponent,
    LaboratoriosComponent,
    ModalContentComponent,
    AddRequerimientoComponent,
    AddLaboratorioComponent,
    VerLaboratorioComponent,
    CardComponent,
    MisRequerimientosComponent,
    AddComputadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [MaquinasVirtualesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
