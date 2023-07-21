import { Component, OnInit } from '@angular/core';
import { MaquinaVirtual } from '../../model/MaquinaVirtual';
import { MaquinasVirtualesService } from '../../services/maquinas-virtuales.service';

@Component({
  selector: 'app-maquinas-virtuales',
  templateUrl: './maquinas-virtuales.component.html',
  styleUrls: ['./maquinas-virtuales.component.css']
})
export class MaquinasVirtualesComponent implements OnInit {
  maquinasVirtuales: MaquinaVirtual[] = [];

  constructor(private maquinasService: MaquinasVirtualesService) { }

  ngOnInit(): void {
    this.obtenerMaquinasVirtuales();
  }

  obtenerMaquinasVirtuales(): void {
    this.maquinasService.getMaquinasVirtuales().subscribe(
      (maquinas) => {
        this.maquinasVirtuales = maquinas;
      },
      (error) => {
        console.error('Error al obtener las máquinas virtuales:', error);
      }
    );
  }
}
