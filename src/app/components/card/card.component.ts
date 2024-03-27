import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Computadora } from 'src/app/model/Computadora';
import { ComputadorasService } from 'src/app/services/computadoras.service';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  @Input() id: number = 0;
  @Input() titulo: string = '';
  @Input() descripciones: string[] = [];
  @Input() imagen: string = '';
  @Input() isEditable: boolean = true;

  constructor(private modalService: NgbModal, private computadoraService:ComputadorasService) { }

  borrarComputadora(id: number){
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.name = 'Confirme la acción antes de continuar.';
    modalRef.componentInstance.message = '¿Seguro que desea eliminar la computadora?';
    modalRef.componentInstance.type = 'confirm';
    modalRef.componentInstance.buttonText = 'Eliminar';
    modalRef.componentInstance.buttonClass = 'btn-danger';
    modalRef.result.then((result) => {
      if (result === 'Eliminar') {
        this.computadoraService.eliminarComputadora(id).subscribe(() => {
          window.location.reload();
        });
      }
    });
  }

  openModal(id:any){
    this.borrarComputadora(id);
  }
}
