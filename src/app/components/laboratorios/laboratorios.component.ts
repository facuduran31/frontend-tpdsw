import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Laboratiorio } from 'src/app/model/Laboratorio';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-laboratorios',
  templateUrl: './laboratorios.component.html',
  styleUrls: ['./laboratorios.component.css']
})
export class LaboratoriosComponent {

  constructor(private modalService:NgbModal) { }

  laboratorios:Laboratiorio[] = [];

  openModal(laboratorio:Laboratiorio) {
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

  borrarLaboratorio(laboratorio:Laboratiorio): void {
    console.log(laboratorio)
  }
}
