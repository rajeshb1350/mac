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
    // 'https://www.mactecit.com/sbus';
    'http://183.82.117.232:8088/sbus-web';
    // 'https://sbus.online';
    
    // private portUrl1: string =
    // 'http://183.82.117.232:8088/sbus-web';

    private GETFAQLIST: string = this.portUrl + '/data/get/faq/list';
    private GETMODULES: string = this.portUrl + '/data/getProducts';
    private POSTSUBSCRIPTIONDATA: string = this.portUrl + '/data/registration';
    private GETENQUIRYSERVICELIST: string = this.portUrl + '/data/get/services/list';
    private POSTENQUIRYDATA: string = this.portUrl + '/data/create/contactUs/enquiry';
    // private GETJOBSLIST: string = this.portUrl + '/data/getJobsList';
    private GETJOBSLIST: string = 'http://192.168.1.39:8092/sbus/data/getJobsList';
    private POSTJOBSREQUEST_START: string = 'http://192.168.1.39:8092/sbus/data/job/';
    private POSTJOBSREQUEST_END: string = '/save/candidateAppliedJobs';

    constructor(private http: HttpClient) { }

    ngOnInit() { }

    postSubscriptionData(data: SubscriptionFrom): Observable<any> {
        return this.http.post(this.POSTSUBSCRIPTIONDATA, data);
    }

    getModules() {
        return this.http.get(this.GETMODULES);
    }

    getApiData() {
        return this.globalData;
    }

    // CONTACT US FORM API'S
    getEnquiryServiceList() {
        return this.http.get( this.GETENQUIRYSERVICELIST);
    }

    postEnquiryData(data) {
        return this.http.post( this.POSTENQUIRYDATA, data );
    }

    // CAREER PAGE API'S
    getJobsList(){
        return this.http.get( this.GETJOBSLIST );
    }

    postJobsRequest(data: any, jobid){
        return this.http.post( this.POSTJOBSREQUEST_START + jobid + this.POSTJOBSREQUEST_END, data );
    }
}