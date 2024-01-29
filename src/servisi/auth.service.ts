import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { ErrorHandlerService } from './error-handler.service';
import { User } from '../app/models/User';
import { Observable } from 'rxjs';
import { first, catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlLogin = "http://localhost:3000/api/login";
  private urlRegister = "http://localhost:3000/api/register"
  private urlEdit = "http://localhost:3000/api/edit_user"
  httpOptions : {headers:HttpHeaders}={
    headers : new HttpHeaders({"Content-Type":"application/json"}),
  }
  constructor(private http : HttpClient,
              private errorHandlerService : ErrorHandlerService) { }

  login(user:Omit<User, "id">): Observable<User> {
    return this.http.post<User>(this.urlLogin,user, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>("login"))
      )

  }
  register(user:Omit<User,"id, uloga">):Observable<User>{
    return this.http.post<User>(this.urlRegister,user, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>("register"))
      )

  }
  updateData(user:any, id:string):Observable<User>{
    return this.http.patch<User>(this.urlEdit,user,this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>("update"))
    )
    }
  }

