import { Component,  ViewChild, AfterViewInit, OnInit, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../servisi/api.services';
import { NgForOf } from '@angular/common';
import { CommonModule,} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pocetna',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
  files : Array <string> = []
  user: any;
  _users: any;
  

  constructor(
    public _api: ApiService
    
  ) {
    this.dohvatipodatke()  
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

  addUser()
  {
      this.user.id = Math.floor(Math.random() * 100000);

      // https://stackoverflow.com/questions/35959372/property-assign-does-not-exist-on-type-objectconstructor
      const newUser = (<any>Object).assign({}, this.user); // copy, -t es6

      // https://stackoverflow.com/questions/64566579/home-come-object-assign-works-for-sending-in-a-copy-of-the-object-to-a-function
      // const newUser = { ...this.user }; // This doesn't work since expected type in addUser() is user: User        
      // this._users.push(this.user);
      this._users.push(newUser);

      // this.service.addUser(newUser);
  }
  
  prikazSlike(src : any){
   console.log(src.url)
   /*let url = new URL('slika',src.url)*/
   window.open(src.url)
    
  }
}

  

  
 
