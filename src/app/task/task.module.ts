import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TaskListComponent],
  imports: [CommonModule, SharedModule, TaskRoutingModule]
})
export class TaskModule {}
