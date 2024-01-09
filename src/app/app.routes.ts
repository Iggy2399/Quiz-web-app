import { Routes } from '@angular/router';

import { LoginComponent } from './Login/login.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { PitanjaComponent } from './pitanja/pitanja.component';

export const routes: Routes = [
    {   
      path : 'login',
      component: LoginComponent
    },
    {
      path: 'pocetna',
      component: PocetnaComponent
    },
    {
      path : 'api-call',
      component: ApiCallComponent
    },
    {
      path: 'pitanja',
      component: PitanjaComponent
    },
   
    {
      path:'**',
      redirectTo: 'login'
    }
];