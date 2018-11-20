import { Injectable, OnInit } from "@angular/core";
import { Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { urlPortService } from './url-port.service';
import { map } from "rxjs/operators";
import { SubscriptionFrom } from "../model/subscriptionForm.model";
import { Observable } from "rxjs/internal/Observable";
import { Resolve } from "@angular/router/src/interfaces";


@Injectable()
export class ApiService implements OnInit {
    servicecall: any
    private globalData: any;
    private portUrl: string =
        // this.port.getUrl(1);
        // 'http://183.82.117.232:8088/SBuS';
        'https://www.mactecit.com/sbus';


    public portUrl1: any = 'http://192.168.1.191:8080/ritebooks-web';
    // this.port.getUrl(1);

    private GETFAQLIST: string = this.portUrl + "/data/get/faq/list";
    private GETMODULES: string = this.portUrl + "/data/getProducts";
    private POSTSUBSCRIPTIONDATA: string = this.portUrl + "/data/registration";
    private GETENQUIRYSERVICELIST: string = this.portUrl1 + "/data/get/services/list";
    private POSTENQUIRYDATA: string = this.portUrl1 + "/data/create/contactUs/enquiry";


    constructor(private http: HttpClient) { }

    ngOnInit() { }

    postSubscriptionData(data: SubscriptionFrom): Observable<any> {
        return this.http.post(this.POSTSUBSCRIPTIONDATA, data).pipe(map((data: Response) => data));
    }

    getModules() {
        return this.http.get(this.GETMODULES).pipe(map((response: Response) => response));
    }

    getApiData() {
        return this.globalData;
    }

    getEnquiryServiceList() {
        return this.http.get( this.GETENQUIRYSERVICELIST).pipe(map((response: Response) => response));
    }

    postEnquiryData(data) {
        return this.http.post( this.POSTENQUIRYDATA, data ).pipe(map((response: Response) => response));
    }
}