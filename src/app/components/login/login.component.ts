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
        this.validarSesionActiva();
      },
      (error) => {
        console.log(error);
        this.openModal();
      }
    )
  }

  openModal() {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.name = 'Error al iniciar sesión';
    modalRef.componentInstance.message = 'El email o la contraseña son incorrectos, por favor verifique los datos ingresados.';
    modalRef.result.then((result) => {
      if (result === 'cerrar') {
        this.router.navigate(['']);
      }
    });
  }

  sesionExpirada(): void {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.name = 'Sesión expirada';
    modalRef.componentInstance.message = 'Su sesión ha expirado, por favor inicie sesión nuevamente.';
    modalRef.componentInstance.type = 'alert';
    modalRef.componentInstance.buttonText = 'Aceptar';
    modalRef.componentInstance.buttonClass = 'btn-primary';
    modalRef.result.then((result) => {
      if (result === 'Aceptar') {
        this.router.navigate(['']);
      }
    });
  }

  validarSesionActiva()
  {
    const token = localStorage.getItem('token');
    if(token != null)
    {
      this.loginService.verifyToken(token).subscribe(
        (response) => {
          if(response.isTokenExpirado == true)
          {
            this.router.navigate(['']);
          }else{
            if(response.usuarioAutenticado.tipoUsuario === 'Encargado')
            {
              this.router.navigate(['/maquinasvirtuales']);
            }else{
              this.router.navigate(['/panel']);
            }
          }
        }
      )
    }else{
      this.router.navigate(['']);
    }
  }
}
