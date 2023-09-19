import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requerimiento } from '../model/Requerimiento';

@Injectable({
  providedIn: 'root'
})
export class RequerimientosService {

  private apiUrl = 'http://localhost:3000/api/requerimientos';
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

  guardarRequerimiento(requerimiento: Requerimiento, isEdit:boolean): Observable<{ id: number }> {
    if (isEdit == true && requerimiento.idRequerimiento) {
      return this.actualizarRequerimiento(requerimiento.idRequerimiento, requerimiento);
    } else {
      return this.crearRequerimiento(requerimiento);
    }
  }

  getMaquinasVirtuales(): Observable<Requerimiento[] | null>{

    this.obtenerHeader();

    return this.http.get<Requerimiento[]>(this.apiUrl, this.httpOptions);
  }

  getRequerimiento(id: number): Observable<Requerimiento | null> {
    this.obtenerHeader();
    return this.http.get<Requerimiento>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  crearRequerimiento(requerimiento: Requerimiento): Observable<{ id: number }> {
    this.obtenerHeader();

    return this.http.post<{ id: number }>(this.apiUrl, requerimiento, this.httpOptions);
  }

  actualizarRequerimiento(id: number, requerimiento: Requerimiento): Observable<any> {
    this.obtenerHeader();

    return this.http.put(`${this.apiUrl}/${id}`, requerimiento, this.httpOptions);
  }

  eliminarRequerimiento(id: number): Observable<any> {
    this.obtenerHeader();

    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
