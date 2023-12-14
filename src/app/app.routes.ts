import { Routes } from '@angular/router';

import { LoginComponent } from './Login/login.component';
import { PocetnaComponent } from './pocetna/pocetna.component';



export const routes: Routes = [
    {   
        path : 'login',
        component: LoginComponent
    },
    {
        path: 'pocetna',
        component: PocetnaComponent,
        
        
    },
    {
      path:'**',
      redirectTo: 'login',
      
      
    }
  ];