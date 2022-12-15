import { makeAutoObservable } from "mobx";

class Todo {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  createTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
}

export default new Todo();
