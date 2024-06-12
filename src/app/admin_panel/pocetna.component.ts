import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule,} from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../servisi/api.services';
import { AuthService } from '../../servisi/auth.service';






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
export class AdminComponent {
  
  korisnik: any = this.fb.group({
    id: [null],
    ime: ['',[Validators.required, Validators.minLength(2)]],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    
  })


  
  
  korisnici : any;
  brojKorisnika: number = 0;
  podaci : any;
  dataRefresher:any

  constructor(
    public _router: Router,
    private fb : FormBuilder,
    private toastr: ToastrService,
    private api : ApiService,
    private auth: AuthService

  ){}

  Router(){
    this._router.navigate(['/api-call']);
  }
  ngOnInit(){
    this.dohvatiPodatke();
   // this.refreshData();  
    
  }
  refreshData(){
    this.dataRefresher = setInterval(()=>{
      this.dohvatiPodatke();
      2000;
    })
  }
  dohvatiPodatke(){
     this.api.getData().subscribe(res =>{
       this.korisnici = res.data;
       this.brojKorisnika = this.korisnici.length
      
    })

  }
  urediKorisnikaTablica(korisnik: any, index:any){
    console.log(korisnik);

    for(let i = 0; i < this.korisnici.length; i++){
      if(this.korisnici[i].id == index){
        console.log(this.korisnici[i]);
        this.korisnici.patchValue({
          'id':  korisnik.id,
          'ime': korisnik.ime,
          'god_rodenja': korisnik.god_rodenja,
          'email': korisnik.email,
          'slika': korisnik.slika
        });
      }
    }
  }
  
  obrisiKorisnika(id: number): void {
    console.log(id);
    if (confirm('Are you sure you want to delete this user?')) {
      this.api.deleteKorisnik(id).subscribe(
        res => {
          console.log("User deleted:", res);
         
        },
        err => {
          console.error("Failed to delete user:", err);
        }
      );
    }
  }
  

  logout(){
    this.auth.logout();
  }
 

 
}