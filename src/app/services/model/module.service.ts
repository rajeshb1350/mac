import { Injectable, OnInit } from  '@angular/core';
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
providedIn:  'root'
})

export class ModuleService implements OnInit{

    constructor(private http: Http ){ }

    ngOnInit(){}


    getModules(){
        return this.http.get("http://127.0.0.1:5500/data.json")
        .pipe(
            map(
                (response: Response) => response.json()
            )
        );
    }
}
