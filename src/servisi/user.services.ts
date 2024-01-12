import { IUserLogin } from '../app/interfaces/IUserLogin';
import { USER_LOGIN_URL } from '../app/urls/urls';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../app/models/User';
import { BehaviorSubject } from 'rxjs';

const USER_KEY = 'User';
@Injectable({
    providedIn: 'root'
})
    

export class UserService{
    private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
    public userObservable:Observable<User>;
    constructor(private _http : HttpClient,
        private toastrService : ToastrService){
    this.userObservable = this.userSubject.asObservable();
        
    }

login(userLogin:IUserLogin):Observable<User>{
    return this._http.post<User>(USER_LOGIN_URL,userLogin).pipe(
      tap({
      next:(user)=>{
        this.setUserToLocalStorage(user);
        this.userSubject.next(user);
        this.toastrService.success(`Dobro došli ${user.ime}`, 
        "Prijava uspješna")

      },
      error:(errorResponse)=>{
        this.toastrService.error(errorResponse.error,)
      } 
    })
    );
  }
  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    
  }

  private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY,JSON.stringify(user));
  }
  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson)return JSON.parse(userJson) as User;
    return new User;
  }
}
