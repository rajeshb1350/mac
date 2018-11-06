import { Injectable, OnInit } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { urlPortService } from './url-port.service';
import { map } from "rxjs/operators";
import { SubscriptionFrom } from "../model/subscriptionForm.model";
import { Observable } from "rxjs/internal/Observable";
import { Resolve } from "@angular/router/src/interfaces";


@Injectable()
export class ApiService implements OnInit {
    private globalData: any;
    private portUrl: string =
        // this.port.getUrl(1);
        'http://183.82.117.232:8088/SBuS';
    private GETFAQLIST: string = this.portUrl + "/data/get/faq/list";
    private GETMODULES: string = this.portUrl + "/data/getProducts";
    private POSTSUBSCRIPTIONDATA: string = this.portUrl + "/data/registration";
   // private GETSOLTBOOKDATA: string = this.portUrl + "/data/get/latest-trainings";


    constructor(private http: Http) { }



    ngOnInit() { }


    postSubscriptionData(data: SubscriptionFrom): Observable<any> {
        return this.http.post(this.POSTSUBSCRIPTIONDATA, data).pipe(
            map(
                (data: Response) => data.json()
            )
        );
    }









    getModules() {
        return this.http.get(this.GETMODULES).pipe(map((response: Response) => response.json()));
    }

   // getSlotBookData() {
     //   return this.http.get(this.GETSOLTBOOKDATA).pipe(map((response: Response) => response.json()));
   // }

    // getApi(){
    //     return this.http.get("http://skpass.com/data/data1.json").pipe(map( (response: Response) => response.json()));
    // }

    getApiData() {
        return this.globalData;
    }


}