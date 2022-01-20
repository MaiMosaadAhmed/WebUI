import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  url = '/api/user';
  phonesData:any ;
  constructor(private http:HttpClient) { }
 
  getPhones() {
     return this.http.get(this.url);
    //.map((res: Response) => res.json().HttpResponse);
  //   return this.phonesData = [
  //     {
  //     "id":1,
  //     "phone":"01010050529",
  //     "country": "Egypt",
  //     "countryCode":"+20",
  //     "validityStatus":true
  //   },
  //   {
  //     "id":2,
  //     "phone":"01010050522",
  //     "country": "Egypt",
  //     "countryCode":"+20",
  //     "validityStatus":true
  //   },
  // ]
   
  }

  postPhones(data:any) {
    return this.http.post(this.url, data);
 }

}
