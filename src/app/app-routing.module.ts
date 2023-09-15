import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaquinasVirtualesComponent } from './components/maquinas-virtuales/maquinas-virtuales.component';
import { AddMaquinaVirtualComponent } from './components/add-maquina-virtual/add-maquina-virtual.component';
import { LoginComponent } from './components/login/login.component';
import { PaneldocentesComponent } from './components/paneldocentes/paneldocentes.component';
import { LaboratoriosComponent } from './components/laboratorios/laboratorios.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'panel', component: PaneldocentesComponent},
  {path: 'maquinasvirtuales/add', component: AddMaquinaVirtualComponent},
  {path: 'maquinasvirtuales/editar/:id', component: AddMaquinaVirtualComponent},
  {path: 'maquinasvirtuales', component: MaquinasVirtualesComponent},
  {path: 'laboratorios', component: LaboratoriosComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
