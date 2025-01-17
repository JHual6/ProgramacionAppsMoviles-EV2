import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class rolestudianteGuard implements CanActivate {

  constructor(private router: Router, private authService: AutenticacionService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const userRole = 'estudiante'; 
    const allowedRoles = route.data['allowedRolesp'] as Array<string>;

    console.log('Rol de usuario:', userRole);
    console.log('Roles permitidos:', allowedRoles);

    if (allowedRoles.includes(userRole)) {
      return true;
    } else {
      return this.router.createUrlTree(['/acceso-denegado']);
    }
  }
}
