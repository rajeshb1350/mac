import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { SlotserviceService } from "../http/slotservice.service";

@Injectable()
export class SlotbookResolverService implements Resolve<any>{
    
    constructor(
        private slotservice: SlotserviceService
    ){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.slotservice.getData().then( ( data: any )=> data.response );
    }
}