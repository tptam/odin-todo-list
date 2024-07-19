import { ulid } from "ulid";
import { isBefore } from "date-fns";
import Todo from "./todo.js";
import Project from "./project.js";


import dummyTodos from "./dummy-todos.json";

class Service {
    #todos = {};
    #projects = {};
    #defaultProject;

    constructor(){
        this.#defaultProject = this.createProject("default");
        // Data retrieval from repository will be added 
    }

    get defaultProject(){
        return this.#defaultProject;
    }

    createTodo(title, description, dueDate, priority, done){
        const id = getId();
        const input = { id, title, description, dueDate, priority, done };
        const validated = validate(input, Todo.schema);
        const invalidKeys = Object.entries(validated)
            .filter(([key, val]) => !val)
            .map(([key, val]) => key);
        if (invalidKeys.length > 0) {
            throw new ValidationError(invalidKeys);
        } else {
            const todo = new Todo(id, title, description, dueDate, priority, done);
            this.#todos[id] = todo;
            this.#defaultProject.addTodo(todo);
            return todo;
        }
    }
    
    getTodoById(id){
        return this.#todos[id];
    }

    updateTodoByID(id, title, description, dueDate, priority, done){
        const todo = this.getTodoById(id);
        const input = { id, title, description, dueDate, priority, done };
        const validated = validate(input, Todo.schema);
        const invalidKeys = Object.entries(validated)
            .filter(([key, val]) => !val)
            .map(([key, val]) => key)
        if (invalidKeys.length > 0) {
            throw new ValidationError(invalidKeys);
        } else {
            todo.setAll(title, description, dueDate, priority, done);
        }
    }

    createProject(name) {
        const id = getId();
        const input = { id, name };
        const validated = validate(input, Project.schema);
        const invalidKeys = Object.entries(validated)
            .filter(([key, val]) => !val)
            .map(([key, val]) => key)
        if (invalidKeys.length > 0) {
            throw new ValidationError(invalidKeys);
        } else {
            const project = new Project(id, name);
            this.#projects[id] = project;
            return project;
        }
    }

    getProjectById(id) {
        return this.#projects[id];
    }

    addTodoToProject(todoId, projectId) {
        const project = this.getProjectById(projectId);
        const todo = this.getTodoById(todoId);
        if (project === undefined || todo === undefined) {
            throw new Error("Object not found.");
        }
        project.addTodo(todo);
    }

    isDefaultProject(projectId) {
        return this.getProjectById(projectId) === this.#defaultProject;
    }

    deleteTodoFromProject(todoId, projectId) {
        if (this.isDefaultProject(projectId)) {
            this.deleteTodo(todoId);
            return;
        }
        const project = this.getProjectById(projectId);
        const todo = this.getTodoById(todoId);
        if (project === undefined || todo === undefined) {
            throw new Error("Object not found.");
        }
        project.deleteTodo(todo);
    }

    updateProjectById(id, name) {
        const project = this.getProjectById(id);
        const input = { id, name };
        const validated = validate(input, Project.schema);
        const invalidKeys = Object.entries(validated)
            .filter(([key, val]) => !val)
            .map(([key, val]) => key);
        if (invalidKeys.length > 0) {
            throw new ValidationError(invalidKeys);
        } else {
            project.name = name;
        }
    }

    deleteProjectById(projectID) {
        delete(this.#projects[projectID]);
    }

    deleteTodoById(todoId) {
        const todo = this.getTodoById(todoId);
        Object.values(this.#projects).forEach(project => {
            project.deleteTodo(todo);
        });
    }

    getAllTodos(){
        return this.#defaultProject.todos;
    }

    getAllProjects(excludeDefault = true) {
        if (excludeDefault) {
            return Object.values(this.#projects)
                .filter(
                    project => project !== this.#defaultProject
                );
        } else {
            return Object.values(this.#projects);
        }
    }

    searchTodos(filterFunc){
        return this.getAllTodos().filter(
            todo => filterFunc(todo)
        );
    }

    searchProjects(filterFunc, excludeDefault=true) {
        this.getAllProjects(excludeDefault).filter(
            project => filterFunc(project)
        )
    }

    getProjectByTodoId(id, ignoreDefault=true){
        const todo = this.getTodoById(id);
        for (let project of Object.values(this.#projects)){
            if (
                project.todos.includes(todo) 
                && (!ignoreDefault || project !== this.#defaultProject)
            ){
                return project;
            }
        }
        return null;
    }

    getOverdueTodosInProject(id) {
        const project = this.getProjectById(id);
        return project.todos.filter(
            todo => isBefore(todo.dueDate, new Date())
        );
    }

    getProjectProgressRate(id){
        const project = this.getProjectById(id);
        const total = project.todos.length;
        if (total === 0) {
            return 0;
        }
        const done = project.todos.filter(todo => todo.done).length;
        return done / total;
    }

    toggleTodoDoneByID(id) {
        const todo = this.getTodoById(id);
        todo.done = !todo.done;
    }

    populateDummy(){
        const todos = dummyTodos.map(
            todo => {
                const newTodo = this.createTodo(
                    todo.title,
                    todo.description,
                    (new Date(todo.dueDate)),
                    todo.priority,
                    todo.done
                );
                return newTodo;
            }
        );
        const project1 = this.createProject("Alice");
        const project2 = this.createProject("Bob");
        const project3 = this.createProject("Charlie");

        todos.map((todo, index) => {
            if (index < 8) {
                this.addTodoToProject(todo.id, project1.id);
            } else if (index < 15) {
                this.addTodoToProject(todo.id, project2.id);
            } else {
                this.addTodoToProject(todo.id, project3.id);
            }
        });
    }
}

function getId() {
    return ulid();
}

function validate(obj, schema){
    const validated = {};
    for (const [key, value] of Object.entries(obj)) {
        validated[key] = schema[key](value);
    }
    return validated;
}

class ValidationError extends Error {
    constructor(keys) {
        super(`Invalid key(s): ${JSON.stringify(keys)}`);
    }
}

export default Service;