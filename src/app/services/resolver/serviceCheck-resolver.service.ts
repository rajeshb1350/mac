import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { ServiceCheckService } from "../servicecheck.service";

@Injectable()
export class ServiceResolverService implements Resolve<any>{
    
    constructor(
        private slotservice: ServiceCheckService
    ){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.slotservice.getData().then( ( data: any )=> data.response );
    }
}