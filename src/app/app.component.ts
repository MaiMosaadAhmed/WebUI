import { Component } from '@angular/core';
import {PhoneService} from './core-module/services/phone.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webUI';
  phonesData: any;
  constructor(private phones:PhoneService) { 
    
    this.phones.getPhones().subscribe( (data) => {
      this.phonesData = data;
    });

  }
}
