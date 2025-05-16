import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aerolinea } from './Aerolinea';

@Injectable({
  providedIn: 'root'
})
export class AerolineaService {

  private baseUrl = 'https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/refs/heads/main/flights.json';

  constructor(private http: HttpClient) { }

  getAerolineas(): Observable<Aerolinea[]> {
    return this.http.get<Aerolinea[]>(this.baseUrl);
  }

  getAerolineaPorId(id: string): Observable<Aerolinea> {
    return this.http.get<Aerolinea>(`https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/refs/heads/main/flights/${id}.json`);
  }
}
