import { Injectable, OnInit } from  '@angular/core';
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
providedIn:  'root'
})

export class ModuleService implements OnInit{

    constructor(private http: Http ){ }

    ngOnInit(){}
}
