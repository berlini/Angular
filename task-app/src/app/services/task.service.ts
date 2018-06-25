import { Injectable } from '@angular/core';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskArray: Task[];

  constructor() { }

  createTask(task: Task) {
    this.taskArray.push(task);
  }

  deleteTask(id: number) {
    let index = this.taskArray.findIndex( task => task.id == id );

    if(index > -1) {
      this.taskArray.splice(index, 1);
    }
  }

  getTasks(): Task[] {
    return this.taskArray;
  }

  getTask(id: number): Task {
    return this.taskArray.find( task => task.id == id );
  }
}
