
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })


export class ApiService{
    constructor(
        private _http: HttpClient
        
      ){}

    getMessage(){
      return this._http.get('http://localhost:3000/api/message');
    }
    dohvatiPodatke(){
        return this._http.get('https://jsonplaceholder.typicode.com/photos')
              .pipe(map((res: any) => res));
    }
   
    
   
    
    
}