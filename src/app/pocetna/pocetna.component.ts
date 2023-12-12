import { Component, NgModule, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../servisi/api.services';



@Component({
  selector: 'app-pocetna',
  standalone: true,
  imports: [],
  templateUrl: './pocetna.component.html',
  styleUrl: './pocetna.component.css'
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

  
 
  this._api.dohvatiPodatke({'email': this.formData.username, 'lozinka': this.password}).subscribe(res=>{
    if(res.success == true){
      sessionStorage.setItem('album_id', res.data.kor_ime);
      sessionStorage.setItem('id', res.data.kor_prezime);
      sessionStorage.setItem('title', res.data.kor_email);
      sessionStorage.setItem('url', res.data.kor_telefon);
      sessionStorage.setItem('thumbnailUrl', res.data.kor_aktivan);
      this.authService.logIn(this.formData.username, this.password);
      this.loading = false;
    } else {
      this.loading = false;
      notify("Korisnik ne postoji ili nije aktivan!", "error");
    }
  },err => {
    notify(err.message, "error");
    this.loading = false;
  });
}
