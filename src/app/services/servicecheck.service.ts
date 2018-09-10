import { Injectable } from "@angular/core";
import { ModuleService } from './model/module.service';

@Injectable()
export class ServiceCheckService{
    constructor(  private Modapi: ModuleService
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