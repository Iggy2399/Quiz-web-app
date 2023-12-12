import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


export class ApiService{
    constructor(
        private _http: HttpClient
      ){}
    
    dohvatiPodatke(a: any){
        return this._http.post('https://jsonplaceholder.typicode.com/photos',+ 'podaci'+ a)
        .pipe(map((res: any) => res ));
    }
}