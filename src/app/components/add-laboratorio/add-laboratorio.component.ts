import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Laboratorio } from 'src/app/model/Laboratorio';
import { LaboratorioService } from 'src/app/services/laboratorios.service';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-add-laboratorio',
  templateUrl: './add-laboratorio.component.html',
  styleUrls: ['./add-laboratorio.component.css']
})
export class AddLaboratorioComponent implements OnInit {

  laboratorio: Laboratorio = {
    idLaboratorio: 0,
    nombreLaboratorio: ''
  };

  isEdit: boolean = false;
  
  constructor(private laboratoriosService: LaboratorioService, private route: ActivatedRoute, private modalService:NgbModal, private router: Router) { }

  openLaboratorioGuardadoModal(isEdit:boolean): void {
    const modalRef = this.modalService.open(ModalContentComponent);
    if(isEdit){
      modalRef.componentInstance.name = 'Edición completa';
      modalRef.componentInstance.message = 'Se ha editado con éxito el laboratorio';
    }else{
      modalRef.componentInstance.name = 'Carga completa';
      modalRef.componentInstance.message = 'Se ha creado con éxito el laboratorio';
    }
    modalRef.componentInstance.type = 'alert';
    modalRef.componentInstance.buttonText = 'Aceptar';
    modalRef.componentInstance.buttonClass = 'btn-primary';
    modalRef.result.then((result) => {
      if (result === 'Aceptar') {
        this.router.navigate(['']);
        this.laboratorio.nombreLaboratorio = '';
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
  
  ngOnInit(): void {
    const routeSnapshot = this.route.snapshot;
    if (routeSnapshot.url.length > 0 && routeSnapshot.url[1].path === 'editar') {
      this.isEdit = true;
    }

    if (this.isEdit) {
      const idLaboratorio = Number(routeSnapshot.params['id']);
      this.loadLaboratorio(idLaboratorio);
    }
  }

  private loadLaboratorio(idLaboratorio: number) {
    this.laboratoriosService.getLaboratorio(idLaboratorio).subscribe(
      laboratorio => {
        if (laboratorio != null) {
          this.laboratorio =  laboratorio;
        }
      },
      error => {
        console.error('Error al obtener el laboratorio:', error);
      }
    );
  }

  onSubmit(): void {
    this.laboratoriosService.guardarLaboratorio(this.laboratorio, this.isEdit).subscribe(
      response => {
        this.openLaboratorioGuardadoModal(this.isEdit);
      },
      error => {
        this.openErrorModal();
      }
    );
  }
}
