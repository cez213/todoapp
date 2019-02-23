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

  onRemoveTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  onToggleComplete(todoToUpdate: Todo) {
    this.todos = this.todos.map(todo => {
      if (todo.id === todoToUpdate.id) {
        todoToUpdate.completed = !todoToUpdate.completed;
        return todoToUpdate;
      }
      return todo;
    });
  }
}
