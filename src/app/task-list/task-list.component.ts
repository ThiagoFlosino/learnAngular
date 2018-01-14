import { Component} from '@angular/core';
import { Task} from '../task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent  {
  tasks = [];
  task: Task = {
    name: null,
    value: 0,
    date_launch: '2018-01-14'
  };
  add() {
    let task = Object.assign({}, this.task);
    this.tasks.push(task);
  }

}
