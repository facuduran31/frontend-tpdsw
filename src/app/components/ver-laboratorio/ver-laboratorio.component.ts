import { Component, Input, OnInit } from '@angular/core';
import { Laboratorio } from 'src/app/model/Laboratorio';
import { LaboratorioService } from 'src/app/services/laboratorios.service';

@Component({
  selector: 'app-ver-laboratorio',
  templateUrl: './ver-laboratorio.component.html',
  styleUrls: ['./ver-laboratorio.component.css']
})
export class VerLaboratorioComponent implements OnInit {
  @Input() computadoras: Laboratorio[] = [];

  constructor() { }
  
  ngOnInit(): void {
    
  }

}
