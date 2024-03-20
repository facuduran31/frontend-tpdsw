import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";

export const verifyTokenDocente = () => {

    const router = inject(Router);
    const loginService = inject(LoginService);

    const token = localStorage.getItem('token') || '';

    loginService.verifyToken(token).subscribe(
        (response) => {
            if (response.usuarioAutenticado.tipoUsuario == "Docente"){
                return true;
            }
            else
            {
                alert("No tiene permisos para acceder a esta sección");
                return false;
            }
        },
        (error) => {
            localStorage.removeItem('token');
            router.navigate(['/login']);
            return false;
        }
    );
  }

  export const verifyTokenEncargado = () => {

    const router = inject(Router);
    const loginService = inject(LoginService);

    const token = localStorage.getItem('token') || '';

    loginService.verifyToken(token).subscribe(
        (response) => {
            if (response.usuarioAutenticado.tipoUsuario == "Encargado"){
                return true;
            }
            else
            {
                alert("No tiene permisos para acceder a esta sección");
                router.navigate(['/']);
                return false;
            }
        },
        (error) => {
            localStorage.removeItem('token');
            router.navigate(['/login']);
            return false;
        }
    );
  }