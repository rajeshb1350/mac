import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { HeaderLink, SubLink, SublinkContent } from "../model/header.model";

@Injectable() 
export class HeaderService{
    constructor(
        private http: Http
    ){}

    getHeaderData(){
        return this.http.get("http://www.js30.com/data/data1.json");
    }
}