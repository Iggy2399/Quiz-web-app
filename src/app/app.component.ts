import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../servisi/api.services';
import { JWT_OPTIONS, JwtHelperService, JwtModule } from '@auth0/angular-jwt';

export function tokenGetter(){
  return localStorage.getItem('jwtToken');
}



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent, RouterLink,
     RouterLinkActive, HttpClientModule, FormsModule,  ],
  providers: [ApiService],   
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'projekt';
}



