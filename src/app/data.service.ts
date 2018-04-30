import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  private tasks = new BehaviorSubject<any>(['The initial task', 'Another silly life task']);
  task = this.tasks.asObservable();

  constructor() { }

  changeTask(task) {
    this.tasks.next(task);
  }

}