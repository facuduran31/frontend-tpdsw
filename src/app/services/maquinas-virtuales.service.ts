import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MaquinaVirtual } from '../model/MaquinaVirtual';

@Injectable({
  providedIn: 'root'
})
export class MaquinasVirtualesService {
  private apiUrl = 'http://localhost:3000/api/maquinasvirtuales';
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

  getMaquinasVirtuales(): Observable<MaquinaVirtual[] | null>{

    this.obtenerHeader();

    return this.http.get<MaquinaVirtual[]>(this.apiUrl, this.httpOptions);
  }

  crearMaquinaVirtual(maquinaVirtual: MaquinaVirtual): Observable<{ id: number }> {
    this.obtenerHeader();

    return this.http.post<{ id: number }>(this.apiUrl, maquinaVirtual, this.httpOptions);
  }

  actualizarMaquinaVirtual(id: number, maquinaVirtual: MaquinaVirtual): Observable<any> {
    this.obtenerHeader();

    return this.http.put(`${this.apiUrl}/${id}`, maquinaVirtual, this.httpOptions);
  }

  eliminarMaquinaVirtual(id: number): Observable<any> {
    this.obtenerHeader();

    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
