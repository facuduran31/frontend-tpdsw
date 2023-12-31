import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = 'http://localhost:3000/api/login';

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