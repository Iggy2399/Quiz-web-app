import { Component } from "@angular/core";
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { FormControl, FormGroup, FormsModule, Validators } from "@angular/forms";
import { ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from "../../servisi/auth.service";
import { ApiService } from "../../servisi/api.services";





@Component({
    standalone: true,
    selector : "app-login",
    imports: [RouterOutlet, RouterLink, 
        RouterLinkActive,
        FormsModule, 
        ReactiveFormsModule,
        CommonModule
    ],
    templateUrl : "./login.component.html",
    styleUrl: "./login.component.css"
})
export class LoginComponent{

    user : FormGroup;
    isSubmitted : boolean = false;
    returnUrl: any;
    state : any;
    
    constructor(
        public router: Router,
        private toastr : ToastrService,
        private authService : AuthService,
        private api:ApiService
    ){
        this.user = new FormGroup({
            email : new FormControl('', [Validators.email, Validators.required]),
            lozinka : new FormControl('', [Validators.minLength(5), Validators.maxLength(12), Validators.required])
            
        })             
    }
   
    posaljiPodatke(){
       this.authService.login(this.user.value).subscribe(()=>{
        console.log("User is logged in");
        
        this.toastr.success("Prijava Uspješna!")
        this.router.navigate(['/admin-panel']);
       }
        
       )};
    }

        
    
   
       
       
    


        
      
        
    
       
            




