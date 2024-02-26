import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../servisi/api.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pitanja',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './pitanja.component.html',
  styleUrl: './pitanja.component.css'
})
export class PitanjaComponent {

  prikaziOdgovor : boolean = false;
  trenutnoPitanje: number = 0;
  ucitano : Boolean = false;
  pitanja: any ;
  tocan_odgovor: any =[];
  
  constructor(private http: HttpClient, private api: ApiService){}

ngOnInit(): void{
  this.dohvatiPitanja();
  
}

  dohvatiPitanja(){
    this.api.dohvatiPitanja().subscribe(res =>{
    this.pitanja = res.data;
      console.log(res.data);
    })
  }

  iducePitanje(){
    if(this.trenutnoPitanje < this.pitanja.length - 1){
     this.trenutnoPitanje ++;
    }
  }

  pocniKviz(){
    this.ucitano = true;
  }

  selectOption(option:any) {
    option.isSelected = "true";
    console.log(option)
    }
  
}
