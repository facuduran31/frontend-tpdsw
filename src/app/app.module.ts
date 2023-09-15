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
<<<<<<< HEAD
import { LaboratoriosComponent } from './laboratorios/laboratorios.component';
=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { FooterComponent } from './components/footer/footer.component';
>>>>>>> 548524f58251281895adca237af6a8a014391f0b

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaquinasVirtualesComponent,
    AddMaquinaVirtualComponent,
    LoginComponent,
    ModalContentComponent,
    FooterComponent
<<<<<<< HEAD
    LaboratoriosComponent
=======
    ModalContentComponent
>>>>>>> 548524f58251281895adca237af6a8a014391f0b
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
