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
        const dataRuleSet = Todo.dataRuleSet;
        const id = getId();
        const input = { id, title, description, dueDate, priority, done };
        if (dataRuleSet.validate(input)) {
            const todo = new Todo(id, title, description, dueDate, priority, done);
            this.#todos[id] = todo;
            this.#defaultProject.addTodo(todo);
            return todo;
        } else {
            throw new Error("Invalid Input");
        }
    }
    
    getTodoById(id){
        return this.#todos[id];
    }

    updateTodoByID(id, title, description, dueDate, priority, done){
        const todo = this.getTodoById(id);
        const input = { id, title, description, dueDate, priority, done };
        const dataRuleSet = Todo.dataRuleSet;
        if (dataRuleSet.validate(input)) {
            todo.setAll(title, description, dueDate, priority, done);
        } else {
            throw new Error("Invalid Input");        
        }
    }

    createProject(name) {
        const dataRuleSet = Project.dataRuleSet;
        const id = getId();
        const input = { id, name };
        if (dataRuleSet.validate(input)) {
            const project = new Project(id, name);
            this.#projects[id] = project;
            return project;
        } else {
            throw new Error("Invalid Input");
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




export default Service;