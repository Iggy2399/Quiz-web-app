import { Component, ErrorHandler } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../servisi/auth.service';
import { User } from '../models/User';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule, ReactiveFormsModule,
    CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  user:FormGroup;

  constructor(private router: Router,
              private toastr : ToastrService,
              private authService : AuthService){

                this.user = new FormGroup({
                  admin : new FormControl(),
                  email : new FormControl('', [Validators.email, Validators.required]),
                  lozinka : new FormControl('', [Validators.minLength(5), Validators.maxLength(12), Validators.required]),
                  ime_prezime : new FormControl('', [Validators.required, Validators.min(2)])
                  
              }) 
              }
              get fc(){
                return this.user.controls
            }
              
  


  posaljiPodatke(){
   this.authService.register(this.user.value).subscribe((msg)=>console.log(msg));
    if(ErrorHandler){
      this.toastr.error("Korisnik već postoji!")
    }else{
      this.toastr.success("Registracija uspješna!")
      this.router.navigate(['/login']);
    }
    }
    
    
     
     

}
