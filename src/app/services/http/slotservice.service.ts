import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlotserviceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000'; 
  getBooks() {
    return this
            .http
            .get(`${this.url}/response`);
        }


}
