import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Requerimiento } from 'src/app/model/Requerimiento';
import { RequerimientosService } from 'src/app/services/requerimientos.service';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { DocentesService } from 'src/app/services/docentes.service';

@Component({
  selector: 'app-ver-requerimientos',
  templateUrl: './ver-requerimientos.component.html',
  styleUrls: ['./ver-requerimientos.component.css']
})
export class VerRequerimientosComponent implements OnInit {

  requerimientos:Requerimiento[] = [];

  constructor(private requerimientosService:RequerimientosService, private docentesService:DocentesService) { }

  ngOnInit(): void {

    this.requerimientosService.getRequerimientos().subscribe(
      res => {
        if(res != null)
        this.requerimientos = res;
        this.loadDocentes();
      },
      err => console.error(err)
    );
  }

  loadDocentes(): void {
    this.requerimientos.forEach(requerimiento => {
      if (requerimiento.legajoDocente != null){
        this.docentesService.getDocenteByLegajo(requerimiento.legajoDocente).subscribe(
          res => {
            if(res != null)
            requerimiento.docente = res.nombre + ' ' + res.apellido;
          },
          err => console.error(err)
        );
      }
    });
  }

}
