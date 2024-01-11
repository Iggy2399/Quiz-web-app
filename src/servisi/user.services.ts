import { IUserLogin } from '../app/interfaces/IUserLogin';
import { USER_LOGIN_URL } from '../app/urls/urls';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../app/models/User';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
    

export class UserService{
    private userSubject = new BehaviorSubject<User>(new User());
    public userObservable:Observable<User>;
    constructor(private _http : HttpClient,
        private toastrService : ToastrService){
    this.userObservable = this.userSubject.asObservable();
        
    }

login(userLogin:IUserLogin):Observable<User>{
    return this._http.post<User>(USER_LOGIN_URL,userLogin).pipe(
      tap({
      next:(user)=>{
        this.userSubject.next(user);
        this.toastrService.success(`Dobro Došao ${user.ime}`, 
        "Prijava uspješna")

      },
      error:(errorResponse)=>{
        this.toastrService.error(errorResponse.error,)

      }
      
    })
    );
    
  }
}