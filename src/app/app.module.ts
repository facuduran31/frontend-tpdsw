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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaquinasVirtualesComponent,
    AddMaquinaVirtualComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MaquinasVirtualesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
