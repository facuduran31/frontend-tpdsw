import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { MaquinaVirtual } from '../model/MaquinaVirtual';

@Injectable({
  providedIn: 'root'
})
export class MaquinasVirtualesService {
  private apiUrl = 'http://localhost:3000/api/maquinasvirtuales';

  constructor(private http: HttpClient) { }

  getMaquinasVirtuales(): Observable<MaquinaVirtual[] | null>{
    const token = localStorage.getItem('token');

    if(!token)
    {
      return of(null);
    }

    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': token
    })
    }

    return this.http.get<MaquinaVirtual[]>(this.apiUrl, httpOptions).pipe(
      catchError((error) => {
        console.log('Error al obtener las maquinas virtuales: ', error);
        return of(null);
      })
    );
  }

  crearMaquinaVirtual(maquinaVirtual: MaquinaVirtual): Observable<{ id: number }> {
    return this.http.post<{ id: number }>(this.apiUrl, maquinaVirtual);
  }

  actualizarMaquinaVirtual(id: number, maquinaVirtual: MaquinaVirtual): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, maquinaVirtual);
  }

  eliminarMaquinaVirtual(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
