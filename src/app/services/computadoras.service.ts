import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computadora } from '../model/Computadora';

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

  guardarComputadora(Computadora: Computadora, isEdit:boolean): Observable<{ id: number }> {
    if (isEdit == true) {
      return this.actualizarComputadora(Computadora.idComputadora, Computadora);
    } else {
      return this.crearComputadora(Computadora);
    }
  }

  getMaquinasVirtuales(): Observable<Computadora[] | null>{

    this.obtenerHeader();

    return this.http.get<Computadora[]>(this.apiUrl, this.httpOptions);
  }

  getComputadora(id: number): Observable<Computadora | null> {
    this.obtenerHeader();
    
    return this.http.get<Computadora>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  crearComputadora(Computadora: Computadora): Observable<{ id: number }> {
    this.obtenerHeader();

    return this.http.post<{ id: number }>(this.apiUrl, Computadora, this.httpOptions);
  }

  actualizarComputadora(id: number, Computadora: Computadora): Observable<any> {
    this.obtenerHeader();
    return this.http.put(`${this.apiUrl}/${id}`, Computadora, this.httpOptions);
  }

  eliminarComputadora(id: number): Observable<any> {
    this.obtenerHeader();

    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
