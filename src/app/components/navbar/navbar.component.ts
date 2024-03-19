import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocentesService } from 'src/app/services/docentes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isEncargado: boolean = false;

  constructor(private router:Router, private docentesService:DocentesService) {}

  ngOnInit(): void {

    let legajo = localStorage.getItem('legajo');
    if(legajo){ 
      this.docentesService.getDocenteByLegajo(legajo).subscribe(
        res => {
          if(res){
            if(res.tipoUsuario == 'Encargado'){
              this.isEncargado = true;
            }
          }
        },
        err => console.log(err)
      );
    } 
  }

  logout() {

    localStorage.removeItem('token');

    this.router.navigate(['/login']);

  }
}
