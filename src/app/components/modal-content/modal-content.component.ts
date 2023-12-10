import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent {
  @Input() name?: string; // Propiedad para el título de la modal
  @Input() message?: string; // Propiedad para el mensaje de la modal
  @Input() type?: string; // Propiedad para el tipo de modal
  @Input() buttonText?: string; // Propiedad para el texto del botón
  @Input() buttonClass?: string; // Propiedad para la clase del botón

  constructor(public activeModal: NgbActiveModal) {}

  borrar(action: string) {
    this.activeModal.close('Eliminar');
  }

  // Función para cerrar la modal
  close(action: string) {
    this.activeModal.close(action);
  }
}
