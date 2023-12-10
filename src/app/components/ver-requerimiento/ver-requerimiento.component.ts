import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Requerimiento } from 'src/app/model/Requerimiento';
import { RequerimientosService } from 'src/app/services/requerimientos.service';

@Component({
  selector: 'app-ver-requerimiento',
  templateUrl: './ver-requerimiento.component.html',
  styleUrls: ['./ver-requerimiento.component.css']
})
export class VerRequerimientoComponent implements OnInit {

  idRequerimiento: number = 0;
  requerimiento?: Requerimiento;

  constructor(private requerimientosService: RequerimientosService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const routeSnapshot = this.route.snapshot;
    this.idRequerimiento = routeSnapshot.params['id'];
    this.requerimientosService.getRequerimiento(this.idRequerimiento).subscribe(
      data => {
        if (data != null)
        this.requerimiento = data;
      },
      err => {
        console.error(err);
      }
    );
  }

}
