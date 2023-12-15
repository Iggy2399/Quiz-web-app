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
    
    
    constructor(
        public router: Router,
        private fb: FormBuilder,
    ){
        this.user = new FormGroup({
            email : new FormControl('', [Validators.email, Validators.required]),
            lozinka : new FormControl('', [Validators.minLength(5), Validators.maxLength(12), Validators.required])
            
            

        })             
    }
    prijava(){
       
        console.log('user data:',this.user);
        if(this.user.value.email === "admin@admin.hr" && this.user.value.lozinka === "admin"){
            this.router.navigate(['/pocetna']);
            
            alert("Logiranje uspješno!")
            return true
        }else{
            alert("Logiranje neuspješno!")
            return false

        }
     }
    
    posaljiPodatke(data: any){
       
    }




}  

    