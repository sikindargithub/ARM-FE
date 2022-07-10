import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserModule } from '../user/user.module';
import { RequestRoutingModule } from './request-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateRequestComponent } from './components/create-request/create-request.component';

@NgModule({
  declarations: [DashboardComponent, CreateRequestComponent],
  imports: [CommonModule, MatIconModule, SharedModule, MatButtonModule, UserModule, RequestRoutingModule]
})
export class RequestModule {}
