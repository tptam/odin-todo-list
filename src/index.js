import Todo from "./todo.js"
import TodoViewModel from "./todo-view-model.js"
import "./style.css";


// Console App Functionality
/*
3. Get attributes of myTodo
4. Set attributes of myTodo
5. Show info of myTodo again
6. Create default project
7. Create myProject
8. Create a lot of todos from JSON
9. Add all todos to default
10. Add some todos to myProject
11. Show default
12. Show myProject
13. Get attributes of myProject
14. Set attributes of myProject
15. Show myProject
16. Delete some todos from myProject
17. Show default, myProject
18. Delete some todos from default
19. Show default, myProject
20. Get overdue todos from default
21. Search todo in default by each attribute
22. Search todo in default by combination of attributes
23. Sort todos in default by each attribute
*/

// 1. Create myTodo
const myTodo = new Todo(
    "Visit Burt",
    "Discuss our work environment. Address: 3329 Gull Harbor Rd. Kier, PE 07453",
    (new Date('January 16, 2025 21:00:00')),
    3
);

// 2. Show info of myTodo
const myTodoViewModel = new TodoViewModel(myTodo);
console.log(myTodoViewModel.toString());