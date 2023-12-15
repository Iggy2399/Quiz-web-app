import { Component, ViewChild, AfterViewInit, OnInit, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../servisi/api.services';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-pocetna',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pocetna.component.html',
  styleUrl: './pocetna.component.css',
  
})
export class PocetnaComponent {
  
  loading = false;
  loginVisible: boolean = true;
  formData: any = {};
  passwordMode: string = "password";
  formDataReset: any = {};
  recoveryCode: string = '';
  sendEmailVisible: boolean = false;
  formDataEmail: any = {};
  podaci : any = []
  src: any;
  http: any;
  

  constructor(
    public _api: ApiService
    
  ) {
    this.dohvatipodatke()
    this.dodajElement()
    
    
    
  }

  dohvatipodatke(){
    this._api.dohvatiPodatke().subscribe(res=>{
        console.log(res)
        this.podaci = res
    },err => 
      alert("Neuspješno dohvačanje podataka")
      /*alert(err.message)*/
      /*notify(err.message, "error");*/
      
    );
  }
  dodajElement(){
    
  }
 

  
  prikazSlike(src : any){
   console.log(src.url)
   /*let url = new URL('slika',src.url)*/
   window.open(src.url)
    
  }
}

  

  
 
