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
            this.#todos.splice(index, 1);
        }
    }

    static #schema = {
        id: val => val !== undefined
            && val !== null
            && typeof (val) === 'string',
        name: val => val !== undefined
            && val !== null
            && typeof (val) === 'string'
            && val.length > 0,
    };

    static get schema(){
        return this.#schema;
    }

}

export default Project;