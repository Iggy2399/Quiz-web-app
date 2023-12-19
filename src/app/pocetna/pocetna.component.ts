import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule,} from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ApiService } from '../../servisi/api.services';



@Component({
  selector: 'app-pocetna',
  standalone: true,
  imports: [CommonModule, 
            FormsModule, 
            RouterOutlet, 
            RouterLink, 
            RouterLinkActive, 
            ReactiveFormsModule],
  templateUrl: './pocetna.component.html',
  styleUrl: './pocetna.component.css',
  
})
export class PocetnaComponent {


  korisnik: any = this.fb.group({
    id: [null],
    ime: ['',[Validators.required, Validators.minLength(2)]],
    god_rodenja: [null, Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    slika: ['', Validators.required]
  })

  

  svikorisnici: any[] = [
    {
      'id': 0,
      'ime': 'Test',
      'god_rodenja': 2023,
      'email': 'test@test.hr',
      'slika': 'url'
    },
    {
      'id': 1,
      'ime': 'Test 2',
      'god_rodenja': 1999,
      'email' : 'test@Test.hr',
      'slika': 'url'
    }
  ];
  
  uredjujem: number = 0;
  dodajem : number = 0;


  constructor(
    public _api: ApiService,
    public _router: Router,
    private fb : FormBuilder,
  ){}

  ngOnInit() {
    this.dohvatiSveKorisnike();
  }

  Router(){
    this._router.navigate(['/api-call']);
  }

  dodajKorisnika(){
   /* this.korisnik = {
      'ime': korisnik.ime,
      'god_rodenja': korisnik.god_rodenja,
      'email': korisnik.email,
      'slika': korisnik.slika
    }*/
    console.log(this.korisnik.value)
    this.svikorisnici.push(this.korisnik.value);
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
          'god_rodenja': korisnik.god_rodenja,
          'email': korisnik.email,
          'slika': korisnik.slika
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
          'god_rodenja': korisnik.god_rodenja,
          'email': korisnik.email,
          'slika': korisnik.slika
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
  
  
  prikaziFormu(){
   this.dodajem = 1
  }
    
}