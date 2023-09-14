import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService:LoginService, private router:Router, private modalService: NgbModal) {
    this.validarSesionActiva();
  }

  email:string = "";
  password:string = "";
  token:string = "";

  login() {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        this.token = response.token;
        localStorage.setItem('token', this.token);
        this.router.navigate(['/maquinasvirtuales']);
      },
      (error) => {
        console.log(error);
        this.openModal(); // Abre la ventana modal en caso de error
      }
    )
  }

  openModal() {
    const modalRef = this.modalService.open(ModalContentComponent); // Debes crear un componente para el contenido de la modal
    modalRef.componentInstance.name = 'Error al iniciar sesión';
    modalRef.componentInstance.message = 'El email o la contraseña son incorrectos, por favor verifique los datos ingresados.';
    modalRef.result.then((result) => {
      if (result === 'cerrar') {
        this.router.navigate(['/']); // Puedes redirigir al usuario después de cerrar la modal
      }
    });
  }

  validarSesionActiva()
  {
    if(localStorage.getItem('token') != null)
    {
      this.router.navigate(['/maquinasvirtuales']);
    }
  }
}
