import { Component } from '@angular/core';
import { Requerimiento } from '../../model/Requerimiento';

@Component({
  selector: 'app-add-requerimiento',
  templateUrl: './add-requerimiento.component.html',
  styleUrls: ['./add-requerimiento.component.css']
})
export class AddRequerimientoComponent {

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
    zapatilla: false
  };

  constructor() { }

  submit()
  {
    console.log(this.requerimiento.tipoRequerimiento);
  }
}
