import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MaquinaVirtual } from '../model/MaquinaVirtual';

@Injectable({
  providedIn: 'root'
})
export class MaquinasVirtualesService {
  private apiUrl = 'http://localhost:3000/maquinasvirtuales';

  constructor(private http: HttpClient) { }

  getMaquinasVirtuales(): Observable<MaquinaVirtual[]> {
    return this.http.get<MaquinaVirtual[]>(this.apiUrl);
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
