import { Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';

import { LoginComponent } from './Login/login.component';
import { AdminComponent } from './admin_panel/pocetna.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { PitanjaComponent } from './pitanja/pitanja.component';
import { RegisterComponent } from './register/register.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

export const routes: Routes = [
    {   
      path : 'login',
      component: LoginComponent
    },
    {
      path: 'admin-panel',
      component: AdminComponent,
      canActivate: [AuthGuard]
    },
    {
      path : 'api-call',
      component: ApiCallComponent
    },
    {
      path: 'pitanja',
      component: PitanjaComponent,
      canActivate:[AuthGuard],
    },
    {
      path: 'registracija',
      component: RegisterComponent
    },
    {
      path: 'scoreboard',
      component: ScoreboardComponent,
      canActivate:[AuthGuard],
    },
   
    {
      path:'**',
      redirectTo: 'login'
    }
];