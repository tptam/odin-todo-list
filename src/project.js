import DataRuleSet from "./data-rule-set";

class Project {
    #id;
    #todos;
    #name;
    constructor(id, name) {
        this.#id = id;
        this.#name = name;
        this.#todos = [];
    }
    get id(){
        return this.#id;
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
        id: [
            val => val !== null,
            val => val !== undefined,
            val => typeof (val) === 'string',
        ],
        name: [
            val => val !== null,
            val => val !== undefined,
            val => typeof (val) === 'string',
            val => val.length < 40,
        ],
    });

    static get dataRuleSet() {
        return Project.#dataRuleSet;
    }
}

export default Project;