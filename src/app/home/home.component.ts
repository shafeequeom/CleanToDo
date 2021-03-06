import { Component, OnInit, Optional } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('tasks', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add Item to List';
  taskText: string = 'My life task';
  tasks = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.task.subscribe(res => this.tasks = res);
    this._data.changeTask(this.tasks);
    this.itemCount = this.tasks.length;
    
  }

  addItem() {
    this.tasks.push(this.taskText);
    this.taskText = '';
    this.itemCount = this.tasks.length;
    this._data.changeTask(this.tasks);
  }

  removeItem(i) {
    this.tasks.splice(i, 1);
    this._data.changeTask(this.tasks);
  }
}
