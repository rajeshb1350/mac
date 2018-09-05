import { Injectable, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService implements OnInit{
    constructor(
        private http: Http
    ){}

    getHeaderData(){
        return this.http.get("http://localhost/data/data1.json")
        .pipe(map((response: Response)=> response.json()));
    }

    getFAQList(){
        return this.http.get("http://183.82.117.232:8085/lms-web/data/get/faq/list")
        .pipe(map((response: Response)=> response.json()));
    } 

    sendChatHistoryToUser(dataObj){
        return this.http.post("http://183.82.117.232:8085/lms-web/data/send/chatHistory/toUser",dataObj)
        .pipe(map((response: Response)=> response));
    } 

    ngOnInit(){

    }
}
