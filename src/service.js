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
        const input = { title, description, dueDate, priority, done };
        if (dataRuleSet.validate(input)) {
            const todo = new Todo(title, description, dueDate, priority, done);
            const id = getId();
            this.#projects[id] = todo;
            return todo;
        } else {
            return null;
        }
    }
    getTodoById(id){
        return this.#todos[id];
    }

}

function getId() {
    return ulid();
}




export default Service;