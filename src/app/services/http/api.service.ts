import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable() 
export class ApiService{
    constructor(
        private http: Http
    ){}

    getHeaderData(){
        return this.http.get("http://localhost/data/data1.json")
        .pipe(map((response: Response)=> response.json()));
    }
}