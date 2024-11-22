import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Docente } from '../model/Docente';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  private apiUrl = environment.url+'/api/docentes';
  private httpOptions = {}

  obtenerHeader()
  {
    const token = localStorage.getItem('token') || '';

    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    }
  }

  constructor(private http: HttpClient) { }

  getDocentes(): Observable<Docente[] | null> {
    this.obtenerHeader();
    return this.http.get<Docente[]>(this.apiUrl, this.httpOptions);
  }

  getDocenteByLegajo(legajo: string): Observable<Docente | null> {
    this.obtenerHeader();
    return this.http.get<Docente>(`${this.apiUrl}/${legajo}`, this.httpOptions);
  }
}
