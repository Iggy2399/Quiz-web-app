import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from '../../servisi/api.services';

@Component({
  selector: 'app-api-call',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './api-call.component.html',
  styleUrl: './api-call.component.css'
})
export class ApiCallComponent {

  podaci : any = []
  src: any;

  constructor(
    public _api : ApiService
  ){
    this.dohvacanjePodataka();
  }
 
  dohvacanjePodataka(){
    this._api.dohvatiPodatke().subscribe((res: any)=>{
        this.podaci = res;
    },
    (err: any) => 
      alert("Neuspješno dohvačanje podataka")
    );
  }

  prikazSlike(src: any){
    window.open(src.url);
  }

}