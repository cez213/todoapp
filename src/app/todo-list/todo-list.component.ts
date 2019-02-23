import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() 
  todos: Todo[] = [];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  } 

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }
}
