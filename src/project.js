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
        this.#todos.push(todo);   
    }
}

export default Project;