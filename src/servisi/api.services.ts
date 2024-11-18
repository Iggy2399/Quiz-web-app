import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api/';

  constructor(private _http: HttpClient) {}
  getData(): Observable<any> {
    return this._http.get<any>('http://localhost:3000/api/prikaz_korisnika');
  }
  dohvatiPodatke() {
    return this._http
      .get('https://jsonplaceholder.typicode.com/photos')
      .pipe(map((res: any) => res));
  }

  dohvatiPitanja() {
    return this._http
      .get('http://localhost:3000/api/pitanja')
      .pipe(map((res: any) => res));
  }
  updatePoints(userId: number, points: number): Observable<any> {
    return this._http.post<any>(`${this.apiUrl}/update-points`, {
      userId,
      points,
    });
  }

  loginPodaci() {
    return this._http
      .get('http://localhost:3000/api/login')
      .pipe(map((res: any) => res));
  }
  deleteKorisnik(id: number): Observable<any> {
    return this._http.post<any>(`${this.apiUrl}obrisi_korisnika/`, { id });
  }
  fetchJson() {
    return this._http.get('');
  }
  
}
