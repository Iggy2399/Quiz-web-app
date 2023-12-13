import { Component } from "@angular/core";
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
    standalone: true,
    selector : "app-login",
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl : "./login.component.html"

})
export class LoginComponent{

    constructor(){

    }
    prijava(){
        alert("Niste unijeli podatke!")
    }

    

    

}

