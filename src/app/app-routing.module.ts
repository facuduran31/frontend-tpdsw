import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaquinasVirtualesComponent } from './components/maquinas-virtuales/maquinas-virtuales.component';
import { AddMaquinaVirtualComponent } from './components/add-maquina-virtual/add-maquina-virtual.component';
import { LoginComponent } from './components/login/login.component';
import { PaneldocentesComponent } from './components/paneldocentes/paneldocentes.component';
import { LaboratoriosComponent } from './components/laboratorios/laboratorios.component';
import { AddRequerimientoComponent } from './components/add-requerimiento/add-requerimiento.component';
import { AddLaboratorioComponent } from './components/add-laboratorio/add-laboratorio.component';
import { VerLaboratorioComponent } from './components/ver-laboratorio/ver-laboratorio.component';
import { MisRequerimientosComponent } from './components/mis-requerimientos/mis-requerimientos.component';
import { AddComputadoraComponent } from './components/add-computadora/add-computadora.component';
import { VerRequerimientosComponent } from './components/ver-requerimientos/ver-requerimientos.component';
import { VerRequerimientoComponent } from './components/ver-requerimiento/ver-requerimiento.component';
import { verifyTokenDocente, verifyTokenEncargado } from './guards/login.guard';
import { PanelencargadosComponent } from './panelencargados/panelencargados.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'paneldocente', component: PaneldocentesComponent, canActivate: [verifyTokenDocente]},
  {path: 'panelencargado', component: PanelencargadosComponent, canActivate: [verifyTokenEncargado]},
  {path: 'maquinasvirtuales/add', component: AddMaquinaVirtualComponent, canActivate: [verifyTokenEncargado]},
  {path: 'maquinasvirtuales/editar/:id', component: AddMaquinaVirtualComponent, canActivate: [verifyTokenEncargado]},
  {path: 'maquinasvirtuales', component: MaquinasVirtualesComponent, canActivate: [verifyTokenEncargado]},
  {path: 'laboratorios/add', component: AddLaboratorioComponent, canActivate: [verifyTokenEncargado]},
  {path: 'laboratorios/editar/:id', component: AddLaboratorioComponent, canActivate: [verifyTokenEncargado]},
  {path: 'laboratorios', component: LaboratoriosComponent, canActivate: [verifyTokenEncargado]},
  {path: 'laboratorios/:id', component: VerLaboratorioComponent, canActivate: [verifyTokenEncargado]},
  {path: 'laboratorios/:id/add', component: AddComputadoraComponent, canActivate: [verifyTokenEncargado]},
  {path: 'laboratorios/:id/editar/:idComputadora', component: AddComputadoraComponent, canActivate: [verifyTokenEncargado]},
  {path: 'nuevorequerimiento', component: AddRequerimientoComponent, canActivate: [verifyTokenDocente]},
  {path: 'misrequerimientos', component: MisRequerimientosComponent, canActivate: [verifyTokenDocente]},
  {path: 'misrequerimientos/editar/:id', component: AddRequerimientoComponent, canActivate: [verifyTokenDocente]},
  {path: 'misrequerimientos/:estado', component: MisRequerimientosComponent, canActivate: [verifyTokenDocente]},
  {path: 'requerimientos/:id', component: VerRequerimientoComponent, canActivate: [verifyTokenEncargado]},
  {path: 'requerimientos', component: VerRequerimientosComponent, canActivate: [verifyTokenEncargado]},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
