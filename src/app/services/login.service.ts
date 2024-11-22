import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = environment.url+'/api/login';

  constructor(private http: HttpClient) { }

  verifyToken(token:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      })
    };

    return this.http.get<any>(this.apiURL + '/verify', httpOptions);
  }

  login(email: string, password: string): Observable<any> {
    const credentials = { email, password };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(this.apiURL, credentials, httpOptions);
  }
}
//