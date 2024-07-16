import DataRuleSet from "./data-rule-set";

class Project {
    #todos;
    #name;
    constructor(name) {
        this.#name = name;
        this.#todos = [];
    }
    get todos(){
        return this.#todos;
    }
    get name() {
        return this.#name;
    }
    set name(newName){
        this.#name = newName;
    }

    addTodo(todo){
        if (!this.#todos.includes(todo)) {
            this.#todos.push(todo);   
        }
    }

    deleteTodo(todo) {
        const index = this.#todos.indexOf(todo);
        if (index !== -1) {
            this.#todos.splice(index, 0);
        }
    }

    static #dataRuleSet = new DataRuleSet({
        name: [
            val => val !== null,
            val => val !== undefined,
            val => typeof (val) === 'string',
            val => val.length < 40,
        ],
    });

    static get dataRuleSet() {
        return Todo.#dataRuleSet;
    }
}

export default Project;