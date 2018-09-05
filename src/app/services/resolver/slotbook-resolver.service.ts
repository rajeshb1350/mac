import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { ApiService } from "../http/api.service";
import { SlotserviceService } from "../http/slotservice.service";

@Injectable()
export class SlotbookResolverService implements Resolve<any>{
    
    constructor(
        private api: ApiService,
        private slotservice: SlotserviceService
    ){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.slotservice.getData().then( ( data: any )=> data.response );
    }
}