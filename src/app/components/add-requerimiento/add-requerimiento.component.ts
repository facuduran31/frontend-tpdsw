import { Component, OnInit } from '@angular/core';
import { Requerimiento } from '../../model/Requerimiento';
import { RequerimientosService } from 'src/app/services/requerimientos.service';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-requerimiento',
  templateUrl: './add-requerimiento.component.html',
  styleUrls: ['./add-requerimiento.component.css']
})
export class AddRequerimientoComponent implements OnInit {

  isEdit: boolean = false;

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

  constructor(private requerimientoService: RequerimientosService, private modalService:NgbModal, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const routeSnapshot = this.route.snapshot;
    if (routeSnapshot.url.length > 0 && routeSnapshot.url[1].path === 'editar') {
      this.isEdit = true;
    }

    if (this.isEdit) {
      const idRequerimiento = Number(routeSnapshot.params['id']);
      this.loadRequerimiento(idRequerimiento);
    }
  }

  loadRequerimiento(idRequerimiento: number) {
    this.requerimientoService.getRequerimiento(idRequerimiento).subscribe(
      response => 
      {
        if(response){
          this.requerimiento = response
        }
      },
      error => this.openErrorModal()
    );
  }

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
    this.requerimientoService.guardarRequerimiento(this.requerimiento, this.isEdit).subscribe(
      response => this.openRequerimientoGuardadoModal(this.isEdit),
      error => this.openErrorModal()
    );
  }
}
