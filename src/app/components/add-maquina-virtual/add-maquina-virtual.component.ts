import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaquinaVirtual } from 'src/app/model/MaquinaVirtual';
import { MaquinasVirtualesService } from 'src/app/services/maquinas-virtuales.service';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-maquina-virtual',
  templateUrl: './add-maquina-virtual.component.html',
  styleUrls: ['./add-maquina-virtual.component.css']
})
export class AddMaquinaVirtualComponent implements OnInit {

  maquinaVirtual: MaquinaVirtual = {
    idMaquinaVirtual: -1,
    sistemaOperativo: '',
    materias: '',
    programas: ''
  };

  isEdit: boolean = false;
  
  constructor(private maquinasService: MaquinasVirtualesService, private route: ActivatedRoute, private modalService:NgbModal, private router: Router) { }

  openMaquinaGuardadaModal(isEdit:boolean): void {
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
      if (result === 'cerrar') {
        this.router.navigate(['/maquinasvirtuales']);
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
      const idMaquinaVirtual = Number(routeSnapshot.params['id']);
      this.loadMaquinaVirtual(idMaquinaVirtual);
    }
  }

  private loadMaquinaVirtual(idMaquinaVirtual: number) {
    this.maquinasService.getMaquinaVirtual(idMaquinaVirtual).subscribe(
      maquinaVirtual => {
        if (maquinaVirtual != null) {
          this.maquinaVirtual = maquinaVirtual;
          console.log(this.maquinaVirtual)
          console.log(this.maquinaVirtual.sistemaOperativo)
        }
      },
      error => {
        console.error('Error al obtener la máquina virtual:', error);
      }
    );
  }

  onSubmit(): void {
    this.maquinasService.guardarMaquinaVirtual(this.maquinaVirtual, this.isEdit).subscribe(
      response => {
        this.openMaquinaGuardadaModal(this.isEdit);
      },
      error => {
        this.openErrorModal();
      }
    );
  }
}
