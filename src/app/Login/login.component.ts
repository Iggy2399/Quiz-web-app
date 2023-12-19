import { Component, NgModule } from "@angular/core";
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { FormControl, FormGroup, FormsModule, Validators } from "@angular/forms";
import { ReactiveFormsModule, FormBuilder} from "@angular/forms";
import { CommonModule } from "@angular/common";

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
    state : boolean = false;
    failed : boolean = false;
    
    constructor(
        public router: Router,
        private fb: FormBuilder,
    ){
        this.user = new FormGroup({
            email : new FormControl('', [Validators.email, Validators.required]),
            lozinka : new FormControl('', [Validators.minLength(5), Validators.maxLength(12), Validators.required])
        })             
    }
    
    async posaljiPodatke(){
        if(this.user.value.email === "admin@admin.hr" && this.user.value.lozinka === "admin"){
            this.state = !this.state;
            await new Promise(resolve => setTimeout(resolve,2000))
            this.router.navigate(['/pocetna']); 
        }else{
            this.failed = !this.failed;
        }
    }

}