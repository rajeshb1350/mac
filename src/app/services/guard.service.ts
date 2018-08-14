import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthorizationService } from "./authorization.service";

// This service work as a guard for the logging system and also achieve authorization

@Injectable()
export class GuardService implements CanActivate{
    constructor(
        private authorization: AuthorizationService,
        private router: Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return this.authorization.isAuthorized().then(
            (authenticated: boolean) => {
                if (authenticated) return true;
                this.router.navigate(["/"]);
                return false;
            }
        );
    }
}