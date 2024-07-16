import { ulid } from "ulid";
import Todo from "./todo.js";
import Project from "./project.js";

class Service {
    #todos = {};
    #projects = {};

    constructor(){
        const defaultProject = new Project("default");
        const id = getId();
        this.#projects[id] = defaultProject;
    }

    createTodo(title, description, dueDate, priority, done){
        const dataRuleSet = Todo.dataRuleSet;
        const id = getId();
        const input = { id, title, description, dueDate, priority, done };
        if (dataRuleSet.validate(input)) {
            const todo = new Todo(id, title, description, dueDate, priority, done);
            this.#projects[id] = todo;
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


}

function getId() {
    return ulid();
}




export default Service;