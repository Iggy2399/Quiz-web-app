import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule,} from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pocetna',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    ReactiveFormsModule,
   
    
  ],
  templateUrl: './pocetna.component.html',
  styleUrl: './pocetna.component.css',
})
export class PocetnaComponent {
  
  korisnik: any = this.fb.group({
    id: [null],
    ime: ['',[Validators.required, Validators.minLength(2)]],
    god_rodenja: [null, Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    slika: ['',]
  })

  svikorisnici: any[] = [
    {
      'id': 0,
      'ime': 'Hrvoje Horvat',
      'god_rodenja': 2023,
      'email': 'ime1@email.hr',
      'slika': 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    {
      'id': 1,
      'ime': 'Janko Janković',
      'god_rodenja': 1999,
      'email' : 'ime2@email.hr',
      'slika': 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }
  ];
  datoteka : any;
  tmpSlika: string = "download.png";
  uredjujem: number = 0;
  dodajem : number = 0;
  upload : number = 0;
  url : number = 0;
  image : boolean = false;

  constructor(
    public _router: Router,
    private fb : FormBuilder,
    private toastr: ToastrService
  ){}

  ngOnInit(){
    this.dohvatiSveKorisnike();
  }

  Router(){
    this._router.navigate(['/api-call']);
  }

  dohvatiSveKorisnike(){
    console.log(this.svikorisnici);
  } 

  urediKorisnikaTablica(korisnik: any, index:any){
    console.log(korisnik);
    this.dodajem = 0;
    this.uredjujem = 1;
    for(let i = 0; i < this.svikorisnici.length; i++){
      if(this.svikorisnici[i].id == index){
        console.log(this.svikorisnici[i]);
        this.korisnik.patchValue({
          'id':  korisnik.id,
          'ime': korisnik.ime,
          'god_rodenja': korisnik.god_rodenja,
          'email': korisnik.email,
          'slika': korisnik.slika
        });
        
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

  upravljanjeKorisnikom(korisnik: any){
    if(this.dodajem){
      if (this.upload == 1){
        this.svikorisnici.push({
          'id': korisnik.value.id,
          'ime': korisnik.value.ime,
          'god_rodenja': korisnik.value.god_rodenja,
          'email': korisnik.value.email,
          'slika': this.tmpSlika
        }
      );
          this.toastr.success("Korisnik uspješno dodan!")
      
      }
      else{
        this.svikorisnici.push({
          'id': korisnik.value.id,
          'ime': korisnik.value.ime,
          'god_rodenja': korisnik.value.god_rodenja,
          'email': korisnik.value.email,
          'slika': korisnik.value.slika
        })
        this.toastr.success("Korisnik uspješno dodan!")
        
      }
      /*this.svikorisnici.push(this.korisnik.value); */
    } 
    if(this.uredjujem){
      for(let i = 0; i < this.svikorisnici.length; i++){
        if(this.svikorisnici[i].id == korisnik.value.id){
          this.svikorisnici[i] = {
            'id': korisnik.value.id,
            'ime': korisnik.value.ime,
            'god_rodenja': korisnik.value.god_rodenja,
            'email': korisnik.value.email,
            'slika': korisnik.value.slika
          }
        }
        this.toastr.success("Korisnik uspješno uređen!")
      }
    }
  }

  obrisiKorisnika(korisnik : any){
    for (let i = 0; i < this.svikorisnici.length; i++){
      if(this.svikorisnici[i].id == korisnik.id){
        this.svikorisnici.splice(i,1)
        this.toastr.success("Korisnik uspješno obrisan!")
      }
    }
  }

  UploadPriprema($event: any,){
    this.datoteka = $event.target.files;
    this.tmpSlika =  window.URL.createObjectURL($event.target.files[0]) 
  }

  prikaziFormu(){
    this.uredjujem = 0;
    this.dodajem = 1;
  }

  Upload(){
    this.upload = 1;
    this.url = 0;
  }
  UrlChoice(){
    this.upload = 0;
    this.url = 1;
  }
  
    
}