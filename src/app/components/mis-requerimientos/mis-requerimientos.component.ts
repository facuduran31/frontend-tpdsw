import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Requerimiento } from 'src/app/model/Requerimiento';
import { RequerimientosService } from 'src/app/services/requerimientos.service';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mis-requerimientos',
  templateUrl: './mis-requerimientos.component.html',
  styleUrls: ['./mis-requerimientos.component.css']
})
export class MisRequerimientosComponent implements OnInit {

  isRequerimientosCerrados:boolean = false;
  requerimientos:Requerimiento[] = [];

  constructor(private requerimientosService:RequerimientosService, private modalService:NgbModal, private route:ActivatedRoute) { }

  ngOnInit(): void {

    let legajo = localStorage.getItem('legajo');

    if(legajo){
      this.requerimientosService.getRequerimientoByIdDocente(+legajo).subscribe(
        (requerimientos) => {
          if(requerimientos){
            this.requerimientos = requerimientos;
            if(this.isRequerimientosCerrados){
              this.requerimientos = this.requerimientos.filter((requerimiento) => requerimiento.estado === 'Finalizado');
            }
          }
        }
      );
    }
  }

  openModal(requerimiento:Requerimiento) {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.name = 'Confirme la acción antes de continuar.';
    modalRef.componentInstance.message = '¿Seguro que desea eliminar el requerimiento?';
    modalRef.componentInstance.type = 'confirm';
    modalRef.componentInstance.buttonText = 'Eliminar';
    modalRef.componentInstance.buttonClass = 'btn-danger';
    modalRef.result.then((result) => {
      if (result === 'Eliminar') {
        if(requerimiento.idRequerimiento){
          this.requerimientosService.eliminarRequerimiento(requerimiento.idRequerimiento).subscribe(
            (res) => {
              this.ngOnInit();
            },
            (err)=>{
              console.log(err);
            }
          );
        }
      }
    });
  }

}
