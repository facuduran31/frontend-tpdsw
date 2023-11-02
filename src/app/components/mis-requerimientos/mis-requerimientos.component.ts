import { Component, OnInit } from '@angular/core';
import { Requerimiento } from 'src/app/model/Requerimiento';
import { RequerimientosService } from 'src/app/services/requerimientos.service';

@Component({
  selector: 'app-mis-requerimientos',
  templateUrl: './mis-requerimientos.component.html',
  styleUrls: ['./mis-requerimientos.component.css']
})
export class MisRequerimientosComponent implements OnInit {

  requerimientos:Requerimiento[] = [];

  constructor(private requerimientosService:RequerimientosService) { }

  ngOnInit(): void {

    let legajo = localStorage.getItem('legajo');

    if(legajo){
      this.requerimientosService.getRequerimientoByIdDocente(+legajo).subscribe(
        (requerimientos) => {
          if(requerimientos){
            this.requerimientos = requerimientos;
          }
        }
      );
    }
  }

}
