import { Component, NgModule } from "@angular/core";
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { FormControl, FormGroup, FormsModule } from "@angular/forms";
import { ReactiveFormsModule, FormBuilder} from "@angular/forms";



@Component({
    standalone: true,
    selector : "app-login",
    imports: [RouterOutlet, RouterLink, 
        RouterLinkActive,
        FormsModule, 
        ReactiveFormsModule,
        
        
        ],
    templateUrl : "./login.component.html"

})
export class LoginComponent{
    user : FormGroup;
    
    
    constructor(
        public router: Router,
        private fb: FormBuilder,
    ){
        this.user = new FormGroup({
            email : new FormControl(''),
            lozinka : new FormControl ('')

        })             
    }
    prijava(){
        
        console.log('user data:',this.user);

        if(this.user.value.email === "admin@admin.hr" && this.user.value.lozinka === "admin"){
            this.router.navigate(['/pocetna']);
        alert("Logiranje uspješno!")
        }else{
        alert("Logiranje neuspješno!")

        }
    }
    posaljiPodatke(data: any){
       
    }
}




    