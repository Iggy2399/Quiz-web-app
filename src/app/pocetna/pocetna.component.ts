import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule,} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApiService } from '../../servisi/api.services';

@Component({
  selector: 'app-pocetna',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './pocetna.component.html',
  styleUrl: './pocetna.component.css',
  
})
export class PocetnaComponent {

  korisnik: any = {
    ime: '',
    telefon: ''
  };
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
    public _api: ApiService,
    public _router: Router
  ){}

  ngOnInit() {
    this.dohvatiSveKorisnike();
  }

  Router(){
    this._router.navigate(['/api-call']);
  }

  dodajKorisnika(korisnik: any){
    this.korisnik = {
      'ime': korisnik.ime,
      'telefon': korisnik.telefon
    }
    this.svikorisnici.push(this.korisnik);
  }

  dohvatiSveKorisnike(){
    console.log(this.svikorisnici);
  } 

  urediKorisnikaTablica(korisnik: any, index:any){
    this.uredjujem = 1;
    for(let i = 0; i < this.svikorisnici.length; i++){
      if(this.svikorisnici[i].id == index){
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
    for(let i = 0; i < this.svikorisnici.length; i++){
      if(this.svikorisnici[i].id == korisnik.id){
        this.svikorisnici[i] = {
          'id': korisnik.id,
          'ime': korisnik.ime,
          'telefon': korisnik.telefon
        }
        this.korisnik = {};
      }
    }
  }

  obrisiKorisnika(korisnik : any){
    for (let i = 0; i < this.svikorisnici.length; i++){
      if(this.svikorisnici[i].id == korisnik.id){
        this.svikorisnici.pop();
      }
    }
  }   
    
}