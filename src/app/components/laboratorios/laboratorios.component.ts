import { Component } from '@angular/core';
import { Laboratiorio } from 'src/app/model/Laboratorio';

@Component({
  selector: 'app-laboratorios',
  templateUrl: './laboratorios.component.html',
  styleUrls: ['./laboratorios.component.css']
})
export class LaboratoriosComponent {

  constructor() { }

  laboratorios:Laboratiorio[] = [];

  openModal(laboratorio:Laboratiorio) {

  }
}
