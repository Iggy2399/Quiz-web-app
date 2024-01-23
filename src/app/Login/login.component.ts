import { Component } from "@angular/core";
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { FormControl, FormGroup, FormsModule, Validators } from "@angular/forms";
import { ReactiveFormsModule, FormBuilder} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from "../../servisi/auth.service";



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
    
    constructor(
        public router: Router,
        private fb: FormBuilder,
        private toastr : ToastrService,
        private activatedRoute: ActivatedRoute,
        private authService : AuthService
    ){
        this.user = new FormGroup({
            admin : new FormControl(),
            email : new FormControl('', [Validators.email, Validators.required]),
            lozinka : new FormControl('', [Validators.minLength(5), Validators.maxLength(12), Validators.required])
            
        })             
    }
    get fc(){
        return this.user.controls
    }
    posaljiPodatke(){
       this.authService.login(this.user.value).subscribe((msg)=>console.log(msg));
        
        }
        
    
       
            
        }
    

