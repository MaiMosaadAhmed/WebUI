import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModuleRoutingModule } from './core-module-routing.module';
import { PhoneComponent } from './models/phone/phone.component';


@NgModule({
  declarations: [
    PhoneComponent
  ],
  imports: [
    CommonModule,
    CoreModuleRoutingModule
  ]
})
export class CoreModuleModule { }
