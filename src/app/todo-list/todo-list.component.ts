import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Output() taskCompleted = new EventEmitter<{todo : string, completed : boolean}>();
  @Output() deleteThisTodo = new EventEmitter<{todo : string, completed : boolean}>();
  @Input() element:{todo : string, completed : boolean};

  constructor() { }

  ngOnInit() {
  }

  getCompleted() {
    return this.element.completed === false ? 'none' : 'line-through';
  }

  isCompleted() {
    this.element.completed = !this.element.completed;
    this.taskCompleted.emit(this.element);
  }

  deleteTodo() {
    this.deleteThisTodo.emit(this.element);
  }

}
