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

  constructor(public activeModal: NgbActiveModal) {}

  // Función para cerrar la modal
  close(action: string) {
    this.activeModal.close(action);
  }
}
