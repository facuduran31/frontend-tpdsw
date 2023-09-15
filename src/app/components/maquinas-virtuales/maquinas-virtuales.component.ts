import { Component, OnInit } from '@angular/core';
import { MaquinaVirtual } from '../../model/MaquinaVirtual';
import { MaquinasVirtualesService } from '../../services/maquinas-virtuales.service';
import { Router } from '@angular/router';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-maquinas-virtuales',
  templateUrl: './maquinas-virtuales.component.html',
  styleUrls: ['./maquinas-virtuales.component.css']
})
export class MaquinasVirtualesComponent implements OnInit {
  maquinasVirtuales: MaquinaVirtual[] = [];

  constructor(private maquinasService: MaquinasVirtualesService, private router:Router, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.obtenerMaquinasVirtuales();
  }

  openModal(maquinaVirtual:MaquinaVirtual) {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.name = '¿Seguro que desea eliminar la máquina virtual?';
    modalRef.componentInstance.message = 'Confirme la acción antes de continuar.';
    modalRef.componentInstance.type = 'confirm';
    modalRef.componentInstance.buttonText = 'Eliminar';
    modalRef.componentInstance.buttonClass = 'btn-danger';
    modalRef.result.then((result) => {
      if (result === 'Eliminar') {
        this.borrarMaquinaVirtual(maquinaVirtual);
      }
    });
  }

  borrarMaquinaVirtual(maquinaVirtual:MaquinaVirtual): void {
    this.maquinasService.eliminarMaquinaVirtual(maquinaVirtual.idMaquinaVirtual).subscribe(
      (maquinaVirtual) => {
        console.log(maquinaVirtual)
        this.obtenerMaquinasVirtuales();
      },
      (error) => {
        console.log('Error al borrar la máquina virtual:', error);
      }
    );
  }

  obtenerMaquinasVirtuales(): void {
    this.maquinasService.getMaquinasVirtuales().subscribe(
      (maquinas) => {
        if(maquinas === null)
        {
          console.log('No se detectó token de autenticación');
          //this.router.navigate([''])
          
        }else{
          this.maquinasVirtuales = maquinas;
        }
      },
      (error) => {
        console.log('Error al obtener las máquinas virtuales:', error);
      }
    );
  }
}
