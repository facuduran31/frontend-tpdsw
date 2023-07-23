import { Component } from '@angular/core';
import { MaquinaVirtual } from 'src/app/model/MaquinaVirtual';
import { MaquinasVirtualesService } from 'src/app/services/maquinas-virtuales.service';

@Component({
  selector: 'app-add-maquina-virtual',
  templateUrl: './add-maquina-virtual.component.html',
  styleUrls: ['./add-maquina-virtual.component.css']
})
export class AddMaquinaVirtualComponent {

  maquinaVirtual: MaquinaVirtual = {
    sistemaOperativo: '',
    materias: '',
    programas: ''
  };
  
  constructor(private maquinasService: MaquinasVirtualesService) {
  }
  
  onSubmit(): void {
    console.log('Datos ingresados:', this.maquinaVirtual);
    this.maquinasService.crearMaquinaVirtual(this.maquinaVirtual).subscribe(
      response => {
        console.log('ID de la nueva máquina:', response.id);
      },
      error => {
        console.error('Error al crear la máquina virtual:', error);
      }
    );
  }
}
