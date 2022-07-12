import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserModule } from '../user/user.module';
import { RequestRoutingModule } from './request-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateRequestComponent } from './components/create-request/create-request.component';
import { RequestListComponent } from './components/request-list/request-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CreateRequestComponent,
    RequestListComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    UserModule,
    RequestRoutingModule,
    HttpClientModule
  ],
  exports: [RequestListComponent]
})
export class RequestModule {}
