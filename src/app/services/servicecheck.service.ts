import { Injectable } from "@angular/core";
import { ApiService } from "./http/api.service";

@Injectable()
export class ServiceCheckService{
    constructor(  private Modapi: ApiService
    ){}

    ngOnInit(){

}
public getData(){
    return new Promise(
      (resolve, reject) => {
        this.Modapi.getModules().subscribe(
          (apidata: any) => {
            resolve(apidata);
          }
        );
      }
    );
  }
}