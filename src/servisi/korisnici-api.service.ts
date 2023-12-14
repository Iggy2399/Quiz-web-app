import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
@Injectable()
export class KorisniciApiService {
 
  constructor(private _http : HttpClient) {}
    svi(){
        return this._http.get('/Login')
    }
}