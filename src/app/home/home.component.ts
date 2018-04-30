import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add Item to List';
  taskText: string = 'My life goal';
  tasks = [];
  constructor() { }

  ngOnInit() {
    this.itemCount = this.tasks.length;
  }

  addItem() {
    this.tasks.push(this.taskText);
    this.taskText= '';
    this.itemCount = this.tasks.length;
  }

}
