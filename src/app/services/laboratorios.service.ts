import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Laboratorio } from '../model/Laboratorio';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {
  private apiUrl = 'http://localhost:3000/api/laboratorios';
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

  guardarLaboratorio(laboratorio: Laboratorio, isEdit:boolean): Observable<{ id: number }> {
    if (isEdit == true) {
      return this.actualizarLaboratorio(laboratorio.idLaboratorio, laboratorio);
    } else {
      return this.crearLaboratorio(laboratorio);
    }
  }

  getLaboratorios(): Observable<Laboratorio[] | null>{

    this.obtenerHeader();

    return this.http.get<Laboratorio[]>(this.apiUrl, this.httpOptions);
  }

  getLaboratorio(id: number): Observable<Laboratorio | null> {
    this.obtenerHeader();
    return this.http.get<Laboratorio>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  crearLaboratorio(Laboratorio: Laboratorio): Observable<{ id: number }> {
    this.obtenerHeader();

    return this.http.post<{ id: number }>(this.apiUrl, Laboratorio, this.httpOptions);
  }

  actualizarLaboratorio(id: number, Laboratorio: Laboratorio): Observable<any> {
    this.obtenerHeader();

    return this.http.put(`${this.apiUrl}/${id}`, Laboratorio, this.httpOptions);
  }

  eliminarLaboratorio(id: number): Observable<any> {
    this.obtenerHeader();

    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
