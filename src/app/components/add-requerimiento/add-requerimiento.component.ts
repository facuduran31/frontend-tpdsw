import { Component } from '@angular/core';
import { Requerimiento } from '../../model/Requerimiento';
import { RequerimientosService } from 'src/app/services/requerimientos.service';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { Router } from '@angular/router';

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

  constructor(private requerimientoService: RequerimientosService, private modalService:NgbModal, private router:Router) { }

  openRequerimientoGuardadoModal(isEdit:boolean): void {
    const modalRef = this.modalService.open(ModalContentComponent);
    if(isEdit){
      modalRef.componentInstance.name = 'Edición completa';
      modalRef.componentInstance.message = 'Se ha editado con éxito la máquina virtual';
    }else{
      modalRef.componentInstance.name = 'Carga completa';
      modalRef.componentInstance.message = 'Se ha creado con éxito la máquina virtual';
    }
    modalRef.componentInstance.type = 'alert';
    modalRef.componentInstance.buttonText = 'Aceptar';
    modalRef.componentInstance.buttonClass = 'btn-primary';
    modalRef.result.then((result) => {
      if (result === 'Aceptar') {
        this.router.navigate(['']);
      }
    });
  }

  openErrorModal(): void {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.name = 'Se ha producido un error';
    modalRef.componentInstance.message = 'No se ha podido procesar la solicitud.';
    modalRef.componentInstance.type = 'alert';
    modalRef.componentInstance.buttonText = 'Aceptar';
    modalRef.componentInstance.buttonClass = 'btn-primary';
    modalRef.result.then((result) => {
      if (result === 'Aceptar') {
        this.router.navigate(['']);
      }
    });
  }

  submit()
  {
    this.requerimientoService.guardarRequerimiento(this.requerimiento, false).subscribe(
      response => this.openRequerimientoGuardadoModal(false),
      error => this.openErrorModal()
    );
  }
}
