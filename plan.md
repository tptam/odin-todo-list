
## Model Modules
### Todo
### Project
- Holds multiple todos
### Repository
- Save, load, update data (to something)
### Service
- Manages relationships between model entities. Knows all todos/projects.
- Controller interacts with this module mainly
- Implements
    - Constructor
        - Create Default project
        - Load data
        - Populate #todos and #projects array
    - Create Todo
        - Generate UUID
        - new Todo with UUID
        - Add to #todos
        - Add to default project
        - Add to other project if specified
        - Save
    - Create Project
        - Generate UUID
        - new Project 
        - Add to #projects with UUID
        - Save
    - Delete Task by UUID
        - Identify task with #tasks
        - Call deleteTask(task) of all projects
        - Update
    - Update Task
    - Update Project
    - Get Task by UUID
    - Get Project by UUID


## View Modules
- Each page has each view module
- There are also todo- and project- views for common visual parts
- Have a function to add event listeners to buttons, links, etc.

## Controller Module
- Has access to View and Logic modules.
- Has functions called when the user interact with the page (handlers)
- Calls the addEventListener functions in view modules to register handlers


## Data Validation
- Each Model class has dataRuleSet property
- DataRuleSet object has rules for each key (Model constructor parameters).
- Rules object has validators and error.
- 
DataRuleSet {
    param1: Rules [{validator, error}, ...]
    param2: Rules
    ...
}


```
// Console App Functionality

// 1. Create myTodo
const service = new Service();
const myTodo = service.createTodo(
    "Visit Burt",
    "Discuss our work environment. Address: 3329 Gull Harbor Rd. Kier, PE 07453",
    (new Date('January 16, 2025 21:00:00')),
    3,
    false
);

// 2. Show info of myTodo
console.log("##### Show myTodo");
const myTodoView = new TodoView(myTodo);
console.log(myTodoView.toString());

// 3. Update myTodo
service.updateTodoByID(
    myTodo.id,
    "See Mr. Burt Goodman",
    myTodo.description,
    myTodo.dueDate,
    myTodo.priority,
    true,
);
console.log("##### Update myTodo");
console.log(myTodoView.toString());


// Create myProject
const myProject = service.createProject("Lumon");
console.log("##### Create myProject");

// Show myProject
const myProjectView = new ProjectView(myProject);
console.log("##### Show myProject");
console.log(myProjectView.toString());

// Show default project
const defaultProject = service.defaultProject;
const defaultProjectView = new ProjectView(defaultProject);

console.log("##### Show default project");
console.log(defaultProjectView.toString());


// Add myTodo to myProject
service.addTodoToProject(myTodo.id, myProject.id);
console.log("##### Add myTodo to myProject");
console.log(myProjectView.toString());
console.log(defaultProjectView.toString());

// Remove myTodo from myProject
service.deleteTodoFromProject(myTodo.id, myProject.id);
console.log("##### Remove myTodo from myProject");
console.log(myProjectView.toString());
console.log(defaultProjectView.toString());

// Remove myTodo from default project
service.deleteTodoFromProject(myTodo.id, defaultProject.id);
console.log("##### Remove myTodo from defaultProject");
console.log(myProjectView.toString());
console.log(defaultProjectView.toString());

// Add myAnotherTodo to myProject
const myAnotherTodo = service.createTodo(
    "Read 'The You You Are'",
    "An inspirational read",
    new Date("2026-10-14"),
    2,
    false
)
service.addTodoToProject(myAnotherTodo.id, myProject.id);
console.log("##### Add myAnotherTodo to myProject again");
console.log(myProjectView.toString());
console.log(defaultProjectView.toString());

// Delete myAnotherTodo
service.deleteTodo(myAnotherTodo.id);
console.log("##### Delete myAnotherTodo");
console.log(myProjectView.toString());
console.log(defaultProjectView.toString());

// Update myProject's name
service.updateProjectById(myProject.id, "My Shiny Project");
console.log("##### Update myProject's name");
console.log(myProjectView.toString());

// Delete myProject
console.log("##### Delete myProject");
service.deleteProjectById(myProject.id);

// Show all projects
console.log("##### Show all projects");
let allProjects = service.getAllProjects(false);
console.table(allProjects);
allProjects.forEach(
    project => {
        console.log((new ProjectView(project)).toString());
    }
);

// Create dummy todos / projects
const todos = dummyTodos.map(
    todo => {
        const newTodo = service.createTodo(
            todo.title, 
            todo.description, 
            (new Date(todo.dueDate)), 
            todo.priority,
            todo.done
        );
        return newTodo;
    }
);
const project1 = service.createProject("Alice");
const project2 = service.createProject("Bob");
const project3 = service.createProject("Charlie");

todos.map((todo, index) => {
    if (index < 8) {
        service.addTodoToProject(todo.id, project1.id);
    } else if (index < 15) {
        service.addTodoToProject(todo.id, project2.id);
    } else {
        service.addTodoToProject(todo.id, project3.id);
    }
})

console.log((new ProjectView(project1)).toString());
console.log((new ProjectView(project2)).toString());
console.log((new ProjectView(project3)).toString());

// List overdue todos
console.log("##### List overdue todos");
const today = new Date();
const overdue = service.searchTodos(
    todo => isBefore(todo.dueDate, today) && !todo.done
);
let str = "";
overdue.forEach(
    todo => str += (new TodoView(todo)).toSummaryString()
)
console.log(str);

// Search by String
let searchKey = "interview"
let re = new RegExp(`\\b${searchKey}\\b`, "gi");
console.log(re.test("Interview prep"));
const match = service.searchTodos(
    todo => re.test(todo.title) 
        || re.test(todo.description)
);
str = "";
match.forEach(
    todo => str += (new TodoView(todo)).toString()
)
console.log(str);
```