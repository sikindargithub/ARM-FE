import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { RequestRoutingModule } from './request-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateRequestComponent } from './components/create-request/create-request.component';


@NgModule({
  declarations: [    
    DashboardComponent,
    CreateRequestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RequestRoutingModule
  ]
})
export class RequestModule { }
