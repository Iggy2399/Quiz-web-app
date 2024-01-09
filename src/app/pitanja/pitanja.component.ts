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
  listaPitanje : any[] = [];
  trenutnoPitanje: number = 0;
  ucitano : Boolean = false;
  constructor(private http: HttpClient){}

ngOnInit(): void{
  this.ucitajPitanja();
}

  ucitajPitanja(){
    this.http.get("../assets/pitanja.json").subscribe((data:any)=>{
      this.listaPitanje = data;
    })
  
  }
  iducePitanje(){
    if(this.trenutnoPitanje < this.listaPitanje.length - 1){
     this.trenutnoPitanje ++;
    }
  }
  pocniKviz(){
    this.ucitano = true;
  }

  
}
