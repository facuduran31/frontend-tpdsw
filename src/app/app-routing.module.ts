import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaquinasVirtualesComponent } from './components/maquinas-virtuales/maquinas-virtuales.component';
import { AddMaquinaVirtualComponent } from './components/add-maquina-virtual/add-maquina-virtual.component';

const routes: Routes = [
  {path: '', component: MaquinasVirtualesComponent},
  {path: 'MaquinasVirtuales/add', component: AddMaquinaVirtualComponent},
  {path: 'MaquinasVirtuales', component: MaquinasVirtualesComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
