import { Component } from '@angular/core';
import {Router,RouterLink,RouterLinkActive} from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule,FormBuilder,ReactiveFormsModule,Validators, FormGroup, FormControl,} from '@angular/forms';
import { ApiService } from '../../servisi/api.services';
import { AuthService } from '../../servisi/auth.service';
import { ToastrService } from 'ngx-toastr';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-pocetna',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  templateUrl: './pocetna.component.html',
  styleUrl: './pocetna.component.css',
})
export class AdminComponent {
  korisnik: any = this.fb.group({
    id: [null],
    ime: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', Validators.compose([Validators.required, Validators.email])],
  });

  korisnici: any;
  brojKorisnika: number = 0;
  dataRefresher: any;
  korisnikPodaci: any;
  uredivanjeKorisnika : boolean = false;
  korisnikUredi: any;
  user : FormGroup;
  isLoading : boolean = false;

  constructor(
    public _router: Router,
    private fb: FormBuilder,
    private api: ApiService,
    private auth: AuthService,
    private toastr: ToastrService,
  ) {

        this.user = new FormGroup({
           email : new FormControl('', [Validators.email, Validators.required]),
          ime_prezime : new FormControl('', [Validators.required, Validators.min(2)])
        }) 
    }
        get fc(){
          return this.user.controls
        }

  ngOnInit() {
    this.fetchAllUserData();
    this.refreshData();
  }
  refreshData() {
    this.dataRefresher = setInterval(() => {
      this.fetchAllUserData();
    },1000);
  }

  ngOnDestroy() {
    if (this.dataRefresher) {
      clearInterval(this.dataRefresher);
    }
  }
  fetchAllUserData() {
    this.api.getData().subscribe((res) => {
      this.korisnici = res.data;
      this.brojKorisnika = this.korisnici.length;
    });
  }

  editUserTable(korisnik: any, index: any) {
    this.uredivanjeKorisnika = true; 
    console.log(korisnik); // 
    const selectedUser = this.korisnici.find((user: any) => user.id === index);
    if (selectedUser) {
      this.korisnikUredi = selectedUser;
    } else {
      console.error("User not found");
    }
  }
  updateUserData(korisnik:any, id: any){
    this.auth.updateData(korisnik, id).subscribe((res)=>{
      console.log(res);
    })
  }
  
  deleteUser(korisnik:any, id: number) {
    this.isLoading = true;
    console.log(id);
    if (confirm(`Želite li obrisati korisnika ${korisnik.ime_prezime}?`)) {
      this.api.deleteKorisnik(id).subscribe(
      (res) => {
        console.log('User deleted:', res);
        this.toastr.success(`Korisnik ${korisnik.ime_prezime} uspješno obrisan`);
        this.isLoading = false;
      },
      (err) => {
        console.error('Failed to delete user:', err);
        this.isLoading = false;
      }
      );
    } else {
      this.isLoading = false;
    }
   
  }
  logout() {
    this.auth.logout();
  }
}
