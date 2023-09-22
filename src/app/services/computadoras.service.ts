import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Computadora from '../model/Computadora';

@Injectable({
  providedIn: 'root'
})
export class ComputadorasService {
  private apiUrl = 'http://localhost:3000/api/computadoras';
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

  guardarComputadora(computadora: Computadora, isEdit:boolean): Observable<{ id: number }> {
    if (isEdit == true) {
      return this.actualizarComputadora(computadora.idComputadora, computadora);
    } else {
      return this.crearComputadora(computadora);
    }
  }

  getComputadoras(): Observable<Computadora[] | null>{

    this.obtenerHeader();

    return this.http.get<Computadora[]>(this.apiUrl, this.httpOptions);
  }

  getComputadora(id: number): Observable<Computadora | null> {
    this.obtenerHeader();
    return this.http.get<Computadora>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  crearComputadora(computadora: Computadora): Observable<{ id: number }> {
    this.obtenerHeader();

    return this.http.post<{ id: number }>(this.apiUrl, computadora, this.httpOptions);
  }

  actualizarComputadora(id: number, computadora: Computadora): Observable<any> {
    this.obtenerHeader();

    return this.http.put(`${this.apiUrl}/${id}`, computadora, this.httpOptions);
  }

  eliminarComputadora(id: number): Observable<any> {
    this.obtenerHeader();

    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
