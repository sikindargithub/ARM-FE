import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this._taskService.getTasks().subscribe((data) => (this.tasks = data));
  }
  displayedColumns: string[] = [
    'requestId',
    'taskDescription',
    'production',
    'productionId',
    'project',
    'talentName',
    'priority',
    'auditPeriod',
    'request',
    'closed'
  ];
  dataSource = new MatTableDataSource(this.tasks);
}
