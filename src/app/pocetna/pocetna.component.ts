import { Component,  ViewChild, AfterViewInit, OnInit, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ApiService } from '../../servisi/api.services';
import { NgForOf } from '@angular/common';
import { CommonModule,} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';



@Component({
  selector: 'app-pocetna',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './pocetna.component.html',
  styleUrl: './pocetna.component.css',
  
})
export class PocetnaComponent {
  router: any;
  podaci : any = []
  src: any;
  http: any;
  files : Array <string> = []
  user: any;
  _users: any;
  korisnik: any = {
    ime: '',
    telefon: ''
  };
  spremi: any;
  ukupanbrojkorisnika: any;
  svikorisnici: any[] = [
    {
      'id': 0,
      'ime': 'Test',
      'telefon': '+38598098098'
    },
    {
      'id': 1,
      'ime': 'Test 2',
      'telefon': '+38598098092'
    }
    
  ];
  
  uredjujem: number = 0;

  constructor(
    public _api: ApiService
    
  ) {
    //this.dohvatipodatke()  
  }
  Router(){
  this.router.navigate(['/api-call']);
  }
  dodajKorisnika(korisnik : any){
    this.korisnik = {
      'ime': korisnik.ime,
      'telefon': korisnik.telefon
    }
    console.log(this.korisnik);
    this.svikorisnici.push(this.korisnik);

    
  }

  ngOnInit() {
    this.dohvatiSveKorisnike();
  }

  dohvatiSveKorisnike(){
    console.log(this.svikorisnici);
  
  } 


  urediKorisnikaTablica(korisnik : any, y:any){
    this.uredjujem = 1;
    for(let i = 0; i < this.svikorisnici.length; i++){
      if(this.svikorisnici[i].id == y){
        this.korisnik = {
          'id':  korisnik.id,
          'ime': korisnik.ime,
          'telefon': korisnik.telefon
        };
        console.log(this.svikorisnici[i]);
      }
    }
  }

  urediKorisnika(korisnik: any){
    this.uredjujem = 0;
    console.log(korisnik);
    for(let i = 0; i < this.svikorisnici.length; i++){
      //console.log(this.svikorisnici[i]);
      if(this.svikorisnici[i].id == korisnik.id){
        this.svikorisnici[i] = {
          'id': korisnik.id,
          'ime': korisnik.ime,
          'telefon': korisnik.telefon
        }
        console.log(this.svikorisnici[i]);
        this.korisnik = {};
      }
    }
  }

  obrisiKorisnika(korisnik : any){
    for (let i = 0; i< this.svikorisnici.length; i++){
      if(this.svikorisnici[i].id == korisnik.id){
      this.svikorisnici.pop();
      }
    }
  
  }   
    
}
    


  
  

  
  



  
 
