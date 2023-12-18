import { Component } from '@angular/core';
import { ApiService } from '../../servisi/api.services';
import { CommonModule } from '@angular/common';


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

constructor(public _api : ApiService){
  this.dohvacanjePodataka()
}
 
dohvacanjePodataka(){
  
  this._api.dohvatiPodatke().subscribe((res: any)=>{
    console.log(res)
    this.podaci = res
},(err: any) => 
  alert("Neuspješno dohvačanje podataka")
    )
}

prikazSlike(src : any){
  console.log(src.url)
  
  window.open(src.url)
   
    }
}







