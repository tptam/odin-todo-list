import Todo from "./todo.js"
import TodoViewModel from "./todo-view-model.js"
import "./style.css";

const todo = new Todo(
    "Visit Burt",
    "Discuss our work environment. Address: 3329 Gull Harbor Rd. Kier, PE 07453",
    (new Date('January 16, 2025 21:00:00')),
    3
);

const todoViewModel = new TodoViewModel(todo);

console.log(todoViewModel.toString());