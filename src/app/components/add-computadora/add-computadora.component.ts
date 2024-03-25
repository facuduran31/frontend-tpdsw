import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Computadora } from 'src/app/model/Computadora';
import { ComputadorasService } from 'src/app/services/computadoras.service';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-add-computadora',
  templateUrl: './add-computadora.component.html',
  styleUrls: ['./add-computadora.component.css']
})
export class AddComputadoraComponent implements OnInit {

  computadora: Computadora = {
    idComputadora: 0,
    imagen: '',
    procesador: '',
    descripcionRam: '',
    descripcionAlmacenamiento: '',
    laboratorio_idLaboratorio: 0
  }

  isEdit: boolean = false;
  
  imgUrl: string = '../../assets/img/noimage.jpg';

  constructor(private computadorasService: ComputadorasService, private route: ActivatedRoute, private modalService:NgbModal, private router: Router) { }

  openComputadoraGuardadoModal(isEdit:boolean): void {
    const modalRef = this.modalService.open(ModalContentComponent);
    if(isEdit){
      modalRef.componentInstance.name = 'Edición completa';
      modalRef.componentInstance.message = 'Se ha editado con éxito el computadora';
    }else{
      modalRef.componentInstance.name = 'Carga completa';
      modalRef.componentInstance.message = 'Se ha creado con éxito el computadora';
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
  
  ngOnInit(): void {

    this.computadora.laboratorio_idLaboratorio = Number(this.route.snapshot.params['id']);
    
    const routeSnapshot = this.route.snapshot;
    if (routeSnapshot.url.length > 0 && routeSnapshot.url[2].path === 'editar') {
      this.isEdit = true;
    }

    if (this.isEdit) {
      const idComputadora = Number(routeSnapshot.url[3].path);
      this.loadComputadora(idComputadora);
    }
  }

  private loadComputadora(idComputadora: number) {
    this.computadorasService.getComputadora(idComputadora).subscribe(
      computadora => {
        if (computadora != null) {
          this.computadora =  computadora;
        }
      },
      error => {
        console.error('Error al obtener el computadora:', error);
      }
    );
  }

  seleccionarImagen(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imgUrl = reader.result as string;
      this.computadora.imagen = this.imgUrl;
    }
  }

  onSubmit(): void {
    if(this.computadora != null){
      this.computadorasService.guardarComputadora(this.computadora, this.isEdit).subscribe(
        response => {
          this.openComputadoraGuardadoModal(this.isEdit);
        },
        error => {
          this.openErrorModal();
          console.log(error, this.computadora)
        }
      );
    }
  }
}
