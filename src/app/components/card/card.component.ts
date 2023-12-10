import { Component, Input, OnInit } from '@angular/core';
import { Computadora } from 'src/app/model/Computadora';

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

  constructor() { }

  openModal(id:any){

  }
}
