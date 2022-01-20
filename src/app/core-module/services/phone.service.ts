import { Injectable } from '@angular/core';
// import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  // constructor(private http:HTTP) { }
  constructor() { }

  // getUser() {
  //   return this.http.get('/api/user')
  //     .map((res: Response) => res.json().response);
  // }
}
