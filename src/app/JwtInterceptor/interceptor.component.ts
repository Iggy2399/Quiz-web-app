import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-interceptor',
  standalone: true,
  imports: [],
  templateUrl: './interceptor.component.html',
  styleUrl: './interceptor.component.css'
})
export class InterceptorComponent implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
  {
    let token = localStorage.getItem('access_token');
    if(token){
      req = req.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
      });
    }
    console.log(req);
    return next.handle(req);
  }

}
