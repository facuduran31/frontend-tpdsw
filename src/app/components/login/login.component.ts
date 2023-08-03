import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService:LoginService, private router:Router) {}

  email:string = "";
  password:string = "";
  token:string = "";

  login()
  {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        this.token = response.token;
        localStorage.setItem('token', this.token);
        this.router.navigate(['/maquinasvirtuales']);
      },
      (error) => console.log(error)
    )
  }
}
