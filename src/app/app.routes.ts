import { Routes } from '@angular/router';

import { LoginComponent } from './Login/login.component';
import { AdminComponent } from './admin_panel/pocetna.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { PitanjaComponent } from './pitanja/pitanja.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {   
      path : 'login',
      component: LoginComponent
    },
    {
      path: 'admin-panel',
      component: AdminComponent
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
      path: 'registracija',
      component: RegisterComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
   
    {
      path:'**',
      redirectTo: 'login'
    }
];