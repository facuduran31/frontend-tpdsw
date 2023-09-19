import { Component } from '@angular/core';
import { Requerimiento } from '../../model/Requerimiento';
import { RequerimientosService } from 'src/app/services/requerimientos.service';

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

  constructor(private requerimientoService: RequerimientosService) { }

  submit()
  {
    this.requerimientoService.guardarRequerimiento(this.requerimiento, false).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }
}
