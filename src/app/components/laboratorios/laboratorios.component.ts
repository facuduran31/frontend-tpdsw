import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Laboratorio } from 'src/app/model/Laboratorio';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { LaboratorioService } from 'src/app/services/laboratorios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laboratorios',
  templateUrl: './laboratorios.component.html',
  styleUrls: ['./laboratorios.component.css']
})
export class LaboratoriosComponent {

  constructor(private router:Router, private modalService:NgbModal, private laboratoriosService:LaboratorioService) { }

  laboratorios:Laboratorio[] = [];

  sesionExpirada(): void {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.name = 'Sesión expirada';
    modalRef.componentInstance.message = 'Su sesión ha expirado, por favor inicie sesión nuevamente.';
    modalRef.componentInstance.type = 'alert';
    modalRef.componentInstance.buttonText = 'Aceptar';
    modalRef.componentInstance.buttonClass = 'btn-primary';
    modalRef.result.then((result) => {
      if (result === 'Aceptar') {
        this.router.navigate(['']);
      }
    });
  }

  openModal(laboratorio:Laboratorio) {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.name = 'Confirme la acción antes de continuar.';
    modalRef.componentInstance.message = '¿Seguro que desea eliminar la máquina virtual?';
    modalRef.componentInstance.type = 'confirm';
    modalRef.componentInstance.buttonText = 'Eliminar';
    modalRef.componentInstance.buttonClass = 'btn-danger';
    modalRef.result.then((result) => {
      if (result === 'Eliminar') {
        this.borrarLaboratorio(laboratorio);
      }
    });
  }

  borrarLaboratorio(laboratorio:Laboratorio): void {
    this.laboratoriosService.eliminarLaboratorio(laboratorio.idLaboratorio).subscribe(
      (maquinaVirtual) => {
        console.log(maquinaVirtual)
        this.obtenerLaboratorios();
      },
      (error) => {
        console.log('Error al borrar el laboratorio:', error);
      }
    );
  }

  obtenerLaboratorios(): void {
    this.laboratoriosService.getLaboratorios().subscribe(
      (laboratorios) => {
        if(laboratorios === null)
        {
          this.sesionExpirada();
          this.router.navigate([''])
        }else{
          this.laboratorios = laboratorios;
        }
      },
      (error) => {
        if(error.status === 401)
        {
          this.sesionExpirada();
          this.router.navigate([''])
        }else{
          console.log('Error al obtener los laboratorios:', error);
        }
      }
    );
  }
}
