import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id: string = '';
  @Input() titulo: string = '';
  @Input() descripciones: string[] = [];
  @Input() imagen: string = '';
  @Input() isEditable: boolean = true;

  constructor() { }

  openModal(id:string){

  }
}
