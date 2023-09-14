import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaquinaVirtual } from 'src/app/model/MaquinaVirtual';
import { MaquinasVirtualesService } from 'src/app/services/maquinas-virtuales.service';

@Component({
  selector: 'app-add-maquina-virtual',
  templateUrl: './add-maquina-virtual.component.html',
  styleUrls: ['./add-maquina-virtual.component.css']
})
export class AddMaquinaVirtualComponent implements OnInit {

  maquinaVirtual: MaquinaVirtual = {
    idMaquinaVirtual: -1,
    sistemaOperativo: '',
    materias: '',
    programas: ''
  };

  isEdit: boolean = false;
  
  constructor(private maquinasService: MaquinasVirtualesService, private route: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    const routeSnapshot = this.route.snapshot;
    if (routeSnapshot.url.length > 0 && routeSnapshot.url[1].path === 'editar') {
      this.isEdit = true;
    }

    if (this.isEdit) {
      const idMaquinaVirtual = Number(routeSnapshot.params['id']);
      this.loadMaquinaVirtual(idMaquinaVirtual);
    }
  }

  private loadMaquinaVirtual(idMaquinaVirtual: number) {
    this.maquinasService.getMaquinaVirtual(idMaquinaVirtual).subscribe(
      maquinaVirtual => {
        if (maquinaVirtual != null) {
          this.maquinaVirtual = maquinaVirtual;
        }
      },
      error => {
        console.error('Error al obtener la máquina virtual:', error);
      }
    );
  }

  onSubmit(): void {
    this.maquinasService.guardarMaquinaVirtual(this.maquinaVirtual, this.isEdit).subscribe(
      response => {
        console.log('ID de la nueva máquina:', response.id);
      },
      error => {
        console.error('Error al crear la máquina virtual:', error);
      }
    );
  }
}
