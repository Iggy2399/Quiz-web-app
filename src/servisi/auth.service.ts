import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { ErrorHandlerService } from './error-handler.service';
import { User } from '../app/models/User';
import { Observable, tap } from 'rxjs';
import { first, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  private urlLogin = "http://localhost:3000/api/login";
  private urlRegister = "http://localhost:3000/api/register"
  private urlEdit = "http://localhost:3000/api/edit_user"
  private urlDelete = "http://localhost:3000/api/obrisi_korisnika"
  httpOptions : {headers:HttpHeaders}={
    headers : new HttpHeaders({"Content-Type":"application/json"}),
  }
  constructor(private http : HttpClient,
              private errorHandlerService : ErrorHandlerService,
             ) { }

              private loginUrl = 'http://localhost:3000/api/login'; // Your login API URL

              
            
              login(email: string, lozinka: string): Observable<any> {
                const body = { email, lozinka };
                return this.http.post<any>(this.loginUrl, body).pipe(
                  tap(response => {
                    localStorage.setItem('userInfo',
                    JSON.stringify(response.user));
                    if (response.token) {
                      this.saveToken(response.token);
                      
                    }
                  })
                );
              }
            
              saveToken(token: string): void {
                localStorage.setItem('jwtToken', token);
                
              }
              
              getToken(): string | null {
                return localStorage.getItem('jwtToken');
              }
             
              logout(): void {
                localStorage.removeItem('jwtToken');
                localStorage.removeItem('userInfo');
              }
              hasToken():boolean{
                return !!this.getToken();
              }
              
              getUserInfo() {
                const userData = localStorage.getItem('userInfo');
                return userData ? JSON.parse(userData) : null;
              }
              isLoggedIn() {
                return localStorage.getItem('jwtToken');
              }
              
            
  
  register(user:Omit<User,"id, uloga">):Observable<User>{
    return this.http.post<User>(this.urlRegister,user, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>("register"))
      )

  }
  updateData(ime:string, email:string):Observable<any>{
    const body = {ime, email}
    return this.http.patch<User>(this.urlEdit,this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>("update"))
    )
  }
}