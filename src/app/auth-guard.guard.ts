import { CanActivateFn } from '@angular/router';
import { Inject} from '@angular/core';



export const authGuardGuard: CanActivateFn = (route, state) => {
  return true;
};

