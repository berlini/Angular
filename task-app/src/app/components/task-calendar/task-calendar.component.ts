import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-calendar',
  templateUrl: './task-calendar.component.html',
  styleUrls: ['./task-calendar.component.css']
})
export class TaskCalendarComponent implements OnInit {

  taskList: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskList = this.taskService.getTasks();
  }

}
