import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
  })


export class ApiService{
  
    constructor(
        private _http: HttpClient,
        private toastrService : ToastrService
        
      ){
        
      }
    getData(){
      return this._http.get('http://localhost:3000/api/prikaz_korisnika')
        .pipe(map((res:any)=>res));
    }
    dohvatiPodatke(){
        return this._http.get('https://jsonplaceholder.typicode.com/photos')
              .pipe(map((res: any) => res));
    }
    loginPodaci(){
      return this._http.get('http://localhost:3000/api/login')
              .pipe(map((res:any)=> res));
    }

    
   
    
   
    
    
}