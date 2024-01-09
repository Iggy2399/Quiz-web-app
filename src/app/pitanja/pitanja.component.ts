import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
  listaPitanja : any[] = [];
  trenutnoPitanje: number = 0;
  ucitano : Boolean = false;
  constructor(private http: HttpClient){}

ngOnInit(): void{
  this.ucitajPitanja();
}

  ucitajPitanja(){
    this.http.get("../assets/pitanja.json").subscribe((data:any)=>{
      this.listaPitanja = data;
    })
  
  }
  iducePitanje(){
    if(this.trenutnoPitanje < this.listaPitanja.length - 1){
     this.trenutnoPitanje ++;
    }
  }
  pocniKviz(){
    this.ucitano = true;
  }
  selectOption(option:any) {
    option.isSelected = true;
    console.log(option)
    }
  
}
