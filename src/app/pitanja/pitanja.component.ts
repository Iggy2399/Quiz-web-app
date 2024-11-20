import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ApiService } from '../../servisi/api.services';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../servisi/auth.service';

@Component({
  selector: 'app-pitanja',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterOutlet, RouterLinkActive],
  templateUrl: './pitanja.component.html',
  styleUrl: './pitanja.component.css',
})
export class PitanjaComponent {
  prikaziOdgovor: boolean = false;
  trenutnoPitanje: number = 0;
  ucitano: Boolean = false;
  pitanja: any = [];
  tocan_odgovor: any = [];
  incorrectKey: boolean = false;
  correctKey: boolean = false;
  counter: number = 0;
  answer: boolean = false;
  userInfo: any;

  constructor(
    private api: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.dohvatiPitanja();
    this.userInfo = this.authService.getUserInfo();
  }
  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  dohvatiPitanja(): void {
    this.api.dohvatiPitanja().subscribe((res) => {
      this.pitanja = res.data.map((question: any) => {
        const answers = [
          { key: 'tocan_odgovor', value: question.tocan_odgovor },
          { key: 'odgovor2', value: question.odgovor2 },
          { key: 'odgovor3', value: question.odgovor3 },
        ];
        const shuffledAnswers = this.shuffleArray(answers);
        return {
          naziv: question.naziv,
          odgovori: shuffledAnswers,
        };
      });
      this.pitanja = this.shuffleArray(this.pitanja);
      this.ucitano = true;
    });
  }
  iducePitanje() {
    this.answer = false;
    this.correctKey = false;
    this.incorrectKey = false;
    if (this.trenutnoPitanje < this.pitanja.length - 1) {
      this.trenutnoPitanje++;
    }
  }

  pocniKviz() {
    this.ucitano = true;
  }
  zero() {
    return 0;
  }

  selectOption(option: any) {
    this.answer = true;
    if (option == 'tocan_odgovor') {
      this.correctKey = true;
      this.counter++;
      console.log(this.correctKey, option);
    } else {
      this.incorrectKey = true;
      this.correctKey = true;
      console.log(this.incorrectKey, option);
    }
  }
  restartQuiz() {
    this.trenutnoPitanje = 0;
    this.answer = false;
    this.correctKey = false;
    this.incorrectKey = false;
    this.counter = 0;
    this.dohvatiPitanja();
  }
  odjava() {
    this.authService.logout();
  }

  getUserInfo(){
    this.authService.getUserInfo();
    
  }
}
