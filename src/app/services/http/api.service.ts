import { Injectable, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable() 
export class ApiService implements OnInit{
    private globalData: any;

    constructor(
        private http: Http
    ){
        // this.http.get("http://skpass.com/data/data1.json").subscribe(
        //     (data: Response)=> {
        //         this.globalData = data.json();
        //     },
        //     error=>error
        // );
    }

    ngOnInit(){}

    getApi(){
        return this.http.get("http://skpass.com/data/data1.json").pipe(map( (response: Response) => response.json()));
    }


    getFAQList(){
        return this.http.get("http://183.82.117.232:8085/lms-web/data/get/faq/list")
        .pipe(map((response: Response)=> response.json()));
    } 

    sendChatHistoryToUser(dataObj){
        return this.http.post("http://183.82.117.232:8085/lms-web/data/send/chatHistory/toUser", dataObj)
        .pipe(map((response: Response)=> response));
    } 

    getApiData(){
        return this.globalData;
    }

    postSubscriptionData(data){
        return this.http.post("http://183.82.117.232:8085/lms-web/data/organization/registration", data);
    }

    getSlotBookData(){
        return this.http.get("http://183.82.117.232:8085/lms-web/data/get/latest-trainings")
        .pipe(map((response: Response)=> response.json()));
    }
}