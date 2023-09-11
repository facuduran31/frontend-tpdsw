import { Component, OnInit } from '@angular/core';
import { MaquinaVirtual } from '../../model/MaquinaVirtual';
import { MaquinasVirtualesService } from '../../services/maquinas-virtuales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maquinas-virtuales',
  templateUrl: './maquinas-virtuales.component.html',
  styleUrls: ['./maquinas-virtuales.component.css']
})
export class MaquinasVirtualesComponent implements OnInit {
  maquinasVirtuales: MaquinaVirtual[] = [];

  constructor(private maquinasService: MaquinasVirtualesService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerMaquinasVirtuales();
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
