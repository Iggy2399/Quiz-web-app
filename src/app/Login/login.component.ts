import { Component, NgModule } from "@angular/core";
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { FormControl, FormGroup, FormsModule, Validators } from "@angular/forms";
import { ReactiveFormsModule, FormBuilder} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ToastrService } from 'ngx-toastr';
import { UserService } from "../../servisi/user.services";

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
        private userService : UserService,
        private activatedRoute: ActivatedRoute
    ){
        this.user = new FormGroup({
            email : new FormControl('', [Validators.email, Validators.required]),
            lozinka : new FormControl('', [Validators.minLength(5), Validators.maxLength(12), Validators.required])
            
        })             
    }

    ngOnInit(){
        this.returnUrl = this.activatedRoute.snapshot.queryParams["returnUrl"]
    }
    get fc(){
        return this.user.controls
    }
    async posaljiPodatke(){
       this.isSubmitted = true;
       if(this.user.invalid) return;
       if(this.userService)
        this.userService.login({email:this.fc["email"].value,
        lozinka:this.fc["lozinka"].value}).subscribe(()=>{
        this.router.navigate(['/pitanja']); 
        })
        
       
            
        }
    }

