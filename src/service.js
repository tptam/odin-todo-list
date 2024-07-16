import { ulid } from "ulid";
import Todo from "./todo.js";
import Project from "./project.js";

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

    deleteTodo(todoId) {
        const todo = this.getTodoById(todoId);
        Object.values(this.#projects).forEach(project => {
            project.deleteTodo(todo);
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