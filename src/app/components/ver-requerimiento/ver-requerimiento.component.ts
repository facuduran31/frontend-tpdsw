import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Laboratorio } from 'src/app/model/Laboratorio';
import { Requerimiento } from 'src/app/model/Requerimiento';
import { LaboratorioService } from 'src/app/services/laboratorios.service';
import { RequerimientosService } from 'src/app/services/requerimientos.service';

@Component({
  selector: 'app-ver-requerimiento',
  templateUrl: './ver-requerimiento.component.html',
  styleUrls: ['./ver-requerimiento.component.css']
})
export class VerRequerimientoComponent implements OnInit {

  idRequerimiento: number = 0;
  laboratorios: Laboratorio[] = [];
  requerimiento:Requerimiento = {
    idRequerimiento: null,
    tipoRequerimiento: '',
    tipoReserva: '',
    estado: '',
    comentarioEncargado: '',
    legajoEncargado: null,
    legajoDocente: null,
    hdmi: false,
    vga: false,
    mouse: false,
    idLaboratorio: null,
    descripcion: '',
    materia: '',
    fechaInicio: null,
    fechaFin: null,
    horaInicio: null,
    horaFin: null,
    proyector: false,
    zapatilla: false,
    docente: ''
  };

  constructor(private requerimientosService: RequerimientosService, private laboratoriosService:LaboratorioService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const routeSnapshot = this.route.snapshot;
    this.idRequerimiento = routeSnapshot.params['id'];
    this.requerimientosService.getRequerimiento(this.idRequerimiento).subscribe(
      data => {
        if (data != null){
          this.requerimiento = data;
          this.getLaboratorios();
        }
      },
      err => {
        console.error(err);
      }
    );
  }

  getLaboratorios(){
    this.laboratoriosService.getLaboratorios().subscribe(
      data => {
        if (data != null)
        this.laboratorios = data;
      },
      err => {
        console.error(err);
      }
    );
  }

}
