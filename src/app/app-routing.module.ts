import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaquinasVirtualesComponent } from './components/maquinas-virtuales/maquinas-virtuales.component';
import { AddMaquinaVirtualComponent } from './components/add-maquina-virtual/add-maquina-virtual.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'maquinasvirtuales/add', component: AddMaquinaVirtualComponent},
  {path: 'maquinasvirtuales/editar/:id', component: AddMaquinaVirtualComponent},
  {path: 'maquinasvirtuales', component: MaquinasVirtualesComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
