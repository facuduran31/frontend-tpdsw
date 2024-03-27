import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Computadora } from 'src/app/model/Computadora';
import { LaboratorioService } from 'src/app/services/laboratorios.service';

@Component({
  selector: 'app-ver-laboratorio',
  templateUrl: './ver-laboratorio.component.html',
  styleUrls: ['./ver-laboratorio.component.css']
})
export class VerLaboratorioComponent implements OnInit {
  @Input() computadoras: Computadora[] = [];

  constructor(private route:ActivatedRoute, private laboratorioService: LaboratorioService, private http:HttpClient) { }

  imagenes: any;

  mostrarImg(){
    
    this.http.get<any>('http://localhost:3000/upload').subscribe(res => {
    
    this.imagenes = res;
    const reader = new FileReader();
    reader.onload = (this.imagenes);
       
    console.log(this.imagenes);
    });

  }
  
  ngOnInit(): void {

    this.mostrarImg();

    const idLaboratorio = this.route.snapshot.params['id'];
    this.laboratorioService.getComputadorasByLaboratorioId(idLaboratorio).subscribe(computadoras => {
      if(computadoras != null)
      {
        this.computadoras = computadoras;
      }
    }, error => {
      console.log(error);
    }
    );

  }

}
