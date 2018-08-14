import { Injectable, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable() 
export class ApiService implements OnInit{
    private globalData: any;

    constructor(
        private http: Http
    ){
        this.http.get("http://skpass.com/data/data1.json").subscribe(
            (data: Response)=> {
                console.log(data.json());
                this.globalData = data.json();
            },
            error=>console.log(error)
        );
    }

    ngOnInit(){}

    getApi(){
        return this.http.get("http://skpass.com/data/data1.json").pipe(map( (response: Response) => response.json()));
    }


    getApiData(){
        return this.globalData;
    }
}