import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];
  
  onAddTodo(todo: Todo) {
    todo.id = String(this.todos.length);
    this.todos = [...this.todos, todo];
  }
}
