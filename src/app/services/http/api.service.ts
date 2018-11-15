import { Injectable, OnInit } from "@angular/core";
import { Response } from "@angular/http";
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { urlPortService } from './url-port.service';
import { map } from "rxjs/operators";
import { SubscriptionFrom } from "../model/subscriptionForm.model";
import { Observable } from "rxjs/internal/Observable";
import { Resolve } from "@angular/router/src/interfaces";


@Injectable()   
export class ApiService implements OnInit {
servicecall:any
private globalData: any;
private portUrl: string =
// this.port.getUrl(1);
'http://183.82.117.232:8088/SBuS';

public portUrl1: any = 'http://192.168.1.191:8080/ritebooks-web/data';
// this.port.getUrl(1);


private GETFAQLIST: string = this.portUrl + "/data/get/faq/list";
private GETMODULES: string = this.portUrl + "/data/getProducts";
private POSTSUBSCRIPTIONDATA: string = this.portUrl + "/data/registration";
private GETMACTECSERVICES: string = this.portUrl1 + "/data/get/services/list";
private POSTCONTACTUSFORM: string = this.portUrl1 + "/data/create/contactUs/enquiry";

// private GETSOLTBOOKDATA: string = this.portUrl + "/data/get/latest-trainings";

constructor(private http: HttpClient) { }

ngOnInit() { }

postSubscriptionData(data: SubscriptionFrom): Observable<any> {
return this.http.post(this.POSTSUBSCRIPTIONDATA, data).pipe(
map(
(data: Response) => data.json()
)
);
}

getModules() {
return this.http.get(this.GETMODULES).pipe(map((response: Response) => response));
}

// getSlotBookData() {
// return this.http.get(this.GETSOLTBOOKDATA).pipe(map((response: Response) => response.json()));
// }

// getApi(){
// return this.http.get("http://skpass.com/data/data1.json").pipe(map( (response: Response) => response.json()));
// }

getApiData() {
return this.globalData;
}
getServicesforContactUs(ccc) {
console.log(ccc)
this.servicecall=this.portUrl1+ccc;
console.log( this.servicecall)
return this.http.get(this.servicecall).pipe(map((response: Response) => response));
// console.log("response");
// return this.http.get(this.portUrl1).map(resp => resp.json()) .catch(console.log(err));
}

contactpost(lll,ccc) {
console.log(ccc)
console.log(lll)
this.servicecall=this.portUrl1+ccc;
console.log( this.servicecall)
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');
return this.http.post(this.servicecall,lll,{headers}).pipe(map((response: Response) => response));
// console.log("response");
// return this.http.get(this.portUrl1).map(resp => resp.json()) .catch(console.log(err));
}

postContactUsFormData(data: SubscriptionFrom): Observable<any> {
return this.http.post(this.POSTCONTACTUSFORM, data).pipe(
map(
(data: Response) => data.json()
)
);
}

}