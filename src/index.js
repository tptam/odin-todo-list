import Todo from "./todo.js";
import TodoView from "./todo-view.js";
import Project from "./project.js";
import ProjectView from "./project-view.js";

import dummyTodos from "./dummy-todos.json";

import "./style.css";


// Console App Functionality
/*
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
const myTodoView = new TodoView(myTodo);
console.log(myTodoView.toString());

// 3. Get attributes of myTodo
console.log(myTodo.title);
console.log(myTodo.description);
console.log(myTodo.dueDate);
console.log(myTodo.priority);
console.log(myTodo.done);

// 4. Set attributes of myTodo
myTodo.title = "Visit OD"
myTodo.description = "Get updates on the new tote bag"
myTodo.dueDate = new Date("2025-03-14");
myTodo.priority = 1;
myTodo.done = true;

// 5. Show info of myTodo again
console.log(myTodoView.toString());

// 6. Create default project
const defaultProject = new Project("default");

// 7. Create myProject
const myProject = new Project("My Project");

// 8. Create a lot of todos from JSON
const todos = dummyTodos.map(
    todo => {
        const newTodo = new Todo(
            todo.title, 
            todo.description, 
            (new Date(todo.dueDate)), 
            todo.priority
        );
        newTodo.done = todo.done;
        return newTodo;
    }
);
console.table(todos);

// 9. Add all todos to default
todos.forEach(todo => defaultProject.addTodo(todo));


// 10. Add some todos to myProject
todos
    .slice(0, 5)
    .forEach(todo => myProject.addTodo(todo));

// 11. Show default
const defaultProjectView = new ProjectView(defaultProject);
console.log(defaultProjectView.toString());

// 12. Show myProject
const myProjectView = new ProjectView(myProject);
console.log(myProjectView.toString());

// 13. Get attributes of myProject
console.log(myProject.name);
console.log(myProject.todos);

// 14. Set attributes of myProject
myProject.name = "My Fancy Project";
// todos has no setter!

// 15. Show myProject
console.log(myProjectView.toString());

// 16. Delete some todos from myProject
myProject.todos.slice(0, 2).forEach(todo => myProject.deleteTodo(todo));

// 17. Show default, myProject
console.log(defaultProject.toString());
console.log(myProjectView.toString());

// 18. Delete some todos from default
const projects = [defaultProject, myProject];
let todoToDelete = defaultProject[1];
projects.filter(project => project.todos.includes(todoToDelete))

/*
If a todo is deleted from default project, all other projects will
delete that project from themselves.

*/


// 19. Show default, myProject
// 20. Get overdue todos from default